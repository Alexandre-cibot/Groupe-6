<?php
/**
 * Created by PhpStorm.
 * User: Alexandre
 * Date: 25/06/2016
 * Time: 10:59
 */

namespace Controller;
use \Model\PageRepository;

class PageController
{

    /**
     * @var PageRepository
     */
    public $repository;
    public $maestro_status;
    /**
     * PageController constructor.
     * @param \PDO $conn
     */
    public function __construct($conn)
    {
        $this->repository = new PageRepository($conn);
    }

    public function testCookie(){
        if(isset($_COOKIE['maestro_status'])){
            $our_cookie = $_COOKIE['maestro_status'];
        }
        else{
            $our_cookie = null;
        }
        $this->kindOfVisitor($our_cookie);
    }

    private function kindOfVisitor($our_cookie){
        if($our_cookie == null && $our_cookie !== "new_visitor" && $our_cookie !== "returning_visitor"){
            $this->maestro_status = "new_visitor";
        }
        else if($our_cookie == "new_visitor" || $our_cookie == "returning_visitor"){
            $this->maestro_status = "returning_visitor";
        }

        $this->addCookie($this->maestro_status);
    }

    private function addCookie($maestro_status){
        $this->repository->updateDataBase($maestro_status);
        return setcookie("maestro_status", $maestro_status);

    }

    public function prepareAddTown($localisation){
        $this->repository->addTown($localisation);
    }


}