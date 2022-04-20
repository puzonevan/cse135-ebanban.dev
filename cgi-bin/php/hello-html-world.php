<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>

<html>
    <head>
        <title>Hello, PHP!</title>
    </head>

    <body>
        <h1><?php echo "Evan Puzon was here - Hello, PHP!"?></h1>
        <?php print("<p>This page was generated with the PHP programming language")?>

        <?php 
            $date = getdate();
            $formatted = $date['weekday'] . " " . $date['month'] . $date['mday'] . " ";

            print("<p>Current Time: $formatted</p>");
        ?>

    </body>

</html>