<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>


<!DOCTYPE html>
<html>

    <head>
        <title>General Request Echo</title>
    </head>

    <body>
        <h1 align="center">General Request Echo</h1>
        <p><b>HTTP Protocol: </b><?php print($_ENV["SERVER_PROTOCOL"])?></p>
        <p><b>HTTP Method: </b><?php echo $_ENV["REQUEST_METHOD"]?></p>
        <p><b>Query String: </b><?php echo $_ENV["QUERY_STRING"]?></p>
        <?php
            $data = $_POST;

            print("<p>Message Body</p>");
            
            print("<ul>");
            foreach($data as $key => $value){
                print("<li>$key = $value </li>");
            }
            print("</ul>");
        ?>
    </body>

</html>