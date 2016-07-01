<?php

try{
    $conn = new PDO('mysql:host=;dbname=;charset=UTF8','', '');

}
catch(PDOException $e) {
    die('ERREUR' . $e->getMessage());
}