<?php
    header("Cache-control: no-cache");
    header("Content-type: text/html");
?>

<?php
    class Message {
        public $title;
        public $heading;
        public $message;
        public $time;
        public $IP;
    }

    $date = getdate();
    $formatted = $date['weekday'] . " " . $date['month'] . " " . $date['mday'] . " ";
    $ip = $ip = $_SERVER['REMOTE_ADDR'];

    $json = new Message();
    $json->title = "Hello, PHP";
    $json->heading = "Hello, PHP!";
    $json->message = "This page was generated with the PHP programming language";
    $json->time = $formatted;
    $json->IP = $ip;

    $encoded = json_encode($json);

    echo $encoded

?>