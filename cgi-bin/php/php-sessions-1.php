<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");

    session_start();

    $name = "";
    if($_POST["username"]){
        $name = $_POST["username"];
    }else{
        $name = $_SESSION["username"];
    }

?>



<!DOCTYPE html>
<html>

    <head>
        <title>PHP Sessions</title>
    </head>

    <body>
        <h1 align="center">PHP Sessions Page 1</h1>

        <p><b>Name: </b><?php if($_SESSION["username"]){ echo $_SESSION["username"]; }else{ echo "mysterio"; }?></p>
        
        <p><a href="/cgi-bin/php/php-sessions-2.php">Session Page 2</a></p>
        <p><a href="/index.html">Home</a></p>
        <form action="/cgi-bin/php/php-destroy-session.php" method="GET">
            <button type="submit">Destroy Session</button>
        </form>
    </body>

</html>