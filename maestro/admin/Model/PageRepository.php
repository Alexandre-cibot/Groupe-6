<?php
/**
 * Created by PhpStorm.
 * User: Alexandre
 * Date: 25/06/2016
 * Time: 16:31
 */

namespace Model;


class PageRepository
{
    public $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }


    public function updateDataBase($maestro_status){
        if($maestro_status == "new_visitor"){
            $stmt = $this->conn->prepare("UPDATE `stats` SET `nb_visitor` = `nb_visitor` + 1");
            $stmt->execute();

        }
        else if($maestro_status == "returning_visitor"){
            $stmt = $this->conn->prepare("UPDATE `stats` SET `nb_visitor`=`nb_visitor` + 1,`nb_returning_visitor`=`nb_returning_visitor` + 1");
            $stmt->execute();
        }

    }

    public function addTown($localisation){

        //On verifie si cette localisation existe deja dans la bdd
        $sql = "SELECT town, count FROM localisation WHERE town = :town";
        $verif = $this->conn->prepare($sql);
        $verif->bindValue(':town', $localisation);
        $verif->execute();

        if($verif->rowCount() > 0){
            $sql = "UPDATE localisation SET count = count + 1  WHERE town = :town";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':town', $localisation);
        }
        else{
            $sql = "INSERT INTO localisation ( town, count ) VALUES (:town, :count)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':town', $localisation);
            $stmt->bindValue(':count', 1);   
        }
        //On execute la requete
        $stmt->execute();
    }

    public function addResolution($resolution){
        if(!empty($resolution)){
            $sql = "SELECT resolution, count FROM resolution WHERE resolution = :resolution";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':resolution', $resolution);
            $stmt->execute();
            $stmt->fetchObject();

            if($stmt->rowCount() == 0){
                $sql = "INSERT INTO resolution(resolution, count) VALUES (:resolution, :count)";
                $stmt = $this->conn->prepare($sql);
                $stmt->bindValue(':resolution', $resolution);
                $stmt->bindValue(':count', 1);
                $stmt->execute();
            }
            else{
                $sql = "UPDATE resolution SET count = count + 1 WHERE resolution = :resolution";
                $stmt = $this->conn->prepare($sql);
                $stmt->bindValue(':resolution', $resolution);
                $stmt->execute();
            }
        }
    }
}