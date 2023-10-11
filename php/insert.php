<?php
include 'server.php';
$lName = $_POST['fname'];
$uName = $_POST['uname'];
$Email = $_POST['email'];
$Phone = $_POST['pnum'];
$Password = $_POST['pass'];
// $Address = $_POST['address'];
$Gender = $_POST['gender'];

$sql = "INSERT INTO studyfreak set name='$lName',user='$uName',email='$Email',Password='$Password', phone='$Phone', gender='$Gender'";
if(mysqli_query($connect,$sql)){
    echo "Data inserted successfully";
}
else{
    die("Data insertion failed");
}


?>