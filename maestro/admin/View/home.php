<?php
if($this->realAdmin == null || $this->realAdmin !== true ){
    header('location:../public-home.php');
    exit();
}
include_once('includes/header.php');
?>

<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Maestro</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="../index.php">Retour au Front-Office</a></li>
                <li class="active"><a href="#">Back-Office</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div class="jumbotron">
        <h1>Back Office</h1>
        <p>Statistiques du site Maestro</p>
    </div>

<h3>Liste de vos suivis :</h3>
        <!-- LES PANELS -->
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <!-- PARTIE 1 -->
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Nos visiteurs :
                    </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                    <ul>
                        <li>
                            Visiteurs Total : <span class="total-visitor"><?=$data->nb_visitor?></span>
                        </li>
                        <li>
                            Visiteurs récurrents: <span class="returning-visitor"><?=$data->nb_returning_visitor?></span>
                        </li>
                        <li>
                            Taux de retour sur le site : <span class="rate-of-return"><?=round((($data->nb_returning_visitor * 100)/$data->nb_visitor),2) . "%"?></span>
                        </li>
                    </ul>
                    <!-- Graphique-->
                    <div id="chartdiv" style="width: 50%; height: 300px;"></div>
                </div>
            </div>
        </div>

        <!-- PARTIE 2 -->
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Résolutions des écrans :
                    </a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">

                    <table class="table table-condensed">
                        <tr>
                            <th>Résolution d'écran</th>
                            <th>Compteur</th>
                        </tr>
                        <?php
                        $i=0;
                        foreach($resolutions as $resolution):
                            $i++;
                            switch($i){
                                case 1:
                                    $class = "warning";
                                    break;
                                case 2:
                                    $class = "info";
                                    break;
                                case 3:
                                    $class = "success";
                                    break;
                                default:
                                    $class="";
                            }
                            ?>
                            <tr class="<?=$class?>">
                                <td><?=$resolution->resolution?></td>
                                <td><?=$resolution->count?></td>
                            </tr>

                        <?php endforeach;?>
                    </table>



                </div>
            </div>
        </div>

        <!-- PARTIE 3 -->
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Villes :
                    </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                        <!--echo "<li>" . $city->town . " : " . $city->count ."</li>";-->
                
                    <table class="table table-condensed">
                        <tr>
                            <th>#</th>
                            <th>Nom de la ville</th>
                            <th>Nombre de visiteurs</th>
                        </tr>
                        <?php 
                        $i=0;
                    foreach($cities as $city):
                        $i++;
                        switch($i){
                            case 1:
                                $class = "warning";
                                break;
                            case 2:
                                $class = "info";
                                break;
                            case 3: 
                                $class = "success";
                                break;
                            default:
                                $class="";
                        }
                    ?>
                        <tr class="<?=$class?>">
                            <td><?=$i?></td>
                            <td><?=$city->town?></td>
                            <td><?=$city->count?></td>
                        </tr>
                    
                    <?php endforeach;?>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Nos scripts -->
<script src="../js/amcharts.js"></script>
<script src="../js/serial.js"></script>
<script src="../js/script-admin.js"></script>
</body>
</html>