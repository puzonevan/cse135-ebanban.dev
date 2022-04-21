<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");


?>



<!DOCTYPE html>
<html>

    <head>
        <title>PHP Sessions</title>
    </head>

    <body>
        <h1 align="center">PHP Sessions Page 2</h1>

        <p><b>Name: </b><?php if($_SESSION["username"]){ echo $_SESSION["username"]; }else{ echo "mysterio"; }?></p>
        
        <p><a href="/cgi-bin/php/php-sessions-1.php">Session Page 1</a></p>
        <p><a href="/index.html">Home</a></p>
        <form action="/cgi-bin/php/php-destroy-session.php" method="GET">
            <button type="submit">Destroy Session</button>
        </form>
    </body>

</html>