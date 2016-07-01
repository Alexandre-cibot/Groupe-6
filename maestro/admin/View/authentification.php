<?php
include_once('includes/header.php');
?>

<div class="" id="exampl" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Administrateur Maestro</h4>
                <p>Cette partie est réservée aux administrateurs du site.</p>
                <?php
                    if($this->realAdmin === false){
                        echo '<div class="alert alert-warning" role="alert">Identifiant ou mot de passe invalide.</div>';
                    }
                ?>
            </div>
            <div class="modal-body">
                <form action="" method="POST" >
                    <div class="form-group">
                        <label for="username" class="control-label">Identifiant</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="control-label">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Connexion">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>
