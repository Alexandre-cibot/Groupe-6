<?php

try{
    $conn = new PDO('mysql:host=alexandrarbdd.mysql.db;dbname=alexandrarbdd;charset=UTF8','alexandrarbdd', 'dB3bq84X');

}
catch(PDOException $e) {
    die('ERREUR' . $e->getMessage());
}