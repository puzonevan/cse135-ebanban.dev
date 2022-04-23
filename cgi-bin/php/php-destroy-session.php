<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
    session_start();
?>



<!DOCTYPE html>
<html>

    <head>
        <title>PHP Delete Session</title>
    </head>

    <body>
        <h1 align="center">PHP Delete Session Page</h1>
        
        <p><a href="/cgi-bin/php/php-sessions-1.php">Session Page 1</a></p>
        <p><a href="/cgi-bin/php/php-sessions-2.php">Session Page 2</a></p>
        <p><a href="/index.html">Home</a></p>
        
    </body>

</html>

<?php 
    $params = session_get_cookie_params();
    setcookie(session_name(), '', 0, $params['path'], $params['domain'], $params['secure'], isset($params['httponly']));
    set_cookie("username", "", time() - 3600);
    session_unset();
    session_destroy();
?>