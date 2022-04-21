<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");

    session_start();

    $name = $_GET["username"];
    $_SESSION["username"] = $name;

?>



<!DOCTYPE html>
<html>

    <head>
        <title>PHP Sessions</title>
    </head>

    <body>
        <h1 align="center">PHP Sessions Page 1</h1>

        <p><b><?php if($_SESSION["username"]){ echo $_SESSION["username"]; }else{ echo "mysterio"; }?></b></p>
        <?php
            
        ?>
    </body>

</html>