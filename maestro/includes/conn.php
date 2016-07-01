<?php

try{
    $conn = new PDO('mysql:host=;dbname=alexandrarbdd;charset=UTF8','', '');

}
catch(PDOException $e) {
    die('ERREUR' . $e->getMessage());
}