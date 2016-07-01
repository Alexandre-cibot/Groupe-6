<?php
// Afficher les erreurs à l'écran
ini_set('display_errors', on);
// Enregistrer les erreurs dans un fichier de log
ini_set('log_errors', 1);
// Nom du fichier qui enregistre les logs (attention aux droits à l'écriture)
ini_set('error_log', dirname(__file__) . '/log_error_php.txt');
// Afficher les erreurs et les avertissements
error_reporting(E_ALL);?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
</head>
<body id="home">
    <div class="home">
        <img class="logo" src="img/MAESTRO logobig.png">
        <img class="hearth" src="img/Hearth.png">
        <img class="cat" src="img/Chat%20Copy.png">
        <img class="perso" src="img/Perso.png">
        <img class="flag" src="img/Drapeau.png"><br>
        <a href="experience.html"><img class="button" src="img/Button.png"></a>
        <img class="moon" src="img/Lune.png">
    </div>
</body>