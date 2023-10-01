<?php
$host = "localhost";
$user = "root";
$pass = "";
$database= "notes";

$connect = new mysqli($host, $user, $pass, $database);
if($connect->error){
    die("Connection failed");
}
else{
    echo "Connected successfully";
}
?>