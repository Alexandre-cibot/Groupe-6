<?php
//On insere ici les resolution d'ecran dans la bdd
require_once ('admin/vendor/autoload.php');
//Connexion a la bdd
require_once('includes/conn.php');

use \Controller\PageController;

$ajaxPublic = new PageController($conn);
$ajaxPublic->repository->addResolution($_POST['screen_resolution']);
