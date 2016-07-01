<?php
/**
 * Created by PhpStorm.
 * User: Alexandre
 * Date: 25/06/2016
 * Time: 16:02
 */

namespace Controller;

use \Model\AdminRepository;

class AdminController
{
    private $adminRepository;
    public $realAdmin;


    public function __construct($conn)
    {
        $this->adminRepository = new AdminRepository($conn);
    }


    public function display(){
        if(isset($_POST['username']) && isset($_POST['password'])){
            $password = $_POST['password'];
            $username = $_POST['username'];
            $this->checkPassword($username, $password);
            switch($this->realAdmin){
                case true:
                    $data = $this->adminRepository->findAll();
                    //On recypere à partir de la bdd les resolutions d'ecrans de nos visiteurs
                    $resolutions = $this->adminRepository->getResolution();
                    //On récupere à partir de la bdd les villes de nos utilisateurs 
                    $cities = $this->adminRepository->getCities();
                    include_once("View/home.php");
                    break;
                case false:
                    include_once ("View/authentification.php");
            }
        }
        else{
            include("View/authentification.php");
        }
    }
    public function checkPassword($username, $password){
        if($username == "alex" && $password == "groupe6"){
            return $this->realAdmin = true;

        }
        else{
            return $this->realAdmin = false;
        }
    }
}