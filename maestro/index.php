<?php
/**
 * Created by PhpStorm.
 * User: Alexandre
 * Date: 25/06/2016
 * Time: 15:51
 */
require_once ('admin/vendor/autoload.php');
//Connexion a la bdd
// Uniquement sur site en ligne pas touche
require_once('includes/conn.php');

use \Controller\PageController;

$pagePublic = new PageController($conn);
$pagePublic->testCookie();
//Uniquement disponible sur le site en ligne
include("geoloc/visitor_localisation.php");
$pagePublic->prepareAddTown($town);

include_once("public-home.php");
// la transactino ajax se passe ensuite dans transfert-resolution.php
