<?php
// Afficher les erreurs à l'écran
ini_set('display_errors', on);
// Enregistrer les erreurs dans un fichier de log
ini_set('log_errors', 1);
// Nom du fichier qui enregistre les logs (attention aux droits à l'écriture)
ini_set('error_log', dirname(__file__) . '/log_error_php.txt');
// Afficher les erreurs et les avertissements
error_reporting(E_ALL);
require "vendor/autoload.php";
require_once('../includes/conn.php');

$pageAdmin = new \Controller\AdminController($conn);

$pageAdmin->display();
