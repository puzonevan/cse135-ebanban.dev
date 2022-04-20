<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>

<!DOCTYPE html>
<html>

    <head>
        <title>Get Request Echo</title>
    </head>

    <body>
        <h1 align="center">Get Request Echo</h1>
        <?php
            $queryString = $_SERVER["QUERY_STRING"];
            $query = [];
            parse_str($_SERVER["QUERY_STRING"], $query);

            
            print("<p>Raw Query String: $queryString</p><br />");

            print("<p>Formatted Query String: </p>");
            foreach($query as $key => $value){
                 echo "<b>$key</b>: $value<br />";
            }
        ?>
    </body>

</html>