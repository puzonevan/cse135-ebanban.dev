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

            print("<b>Query String: </b> $queryString");

            foreach($query as $key => $value){
                 echo "<b>$key</b>: $value";
            }
        ?>
    </body>

</html>