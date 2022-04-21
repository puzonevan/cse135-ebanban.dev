<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>


<!DOCTYPE html>
<html>

    <head>
        <title>POST Request Echo</title>
    </head>

    <body>
        <h1 align="center">POST Request Echo</h1>
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