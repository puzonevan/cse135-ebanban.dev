<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>

<!DOCTYPE html>
<html>

    <head>
        <title>Environment Variables</title>
    </head>

    <body>
        <h1 align="center">Environment Variables</h1>
        <?php
            $env = $_ENV;

            
            echo $env["USER"]

        ?>
    </body>

</html>