<?php
/**
 * Created by PhpStorm.
 * User: Alexandre
 * Date: 27/06/2016
 * Time: 12:47
 */

namespace Model;


class AdminRepository
{
    public $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function findAll(){
        $sql ="SELECT `nb_visitor`, `nb_returning_visitor` FROM `stats`";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchObject();
    }

    public function getCities(){
        $sql = "SELECT `id`, `town`, `count` FROM `localisation` ORDER BY `count` DESC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(); 
        return $stmt->fetchAll(\PDO::FETCH_OBJ);
    }

    public function getResolution(){
        $sql = "SELECT resolution, count FROM resolution ORDER BY count DESC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_OBJ);

    }
}
