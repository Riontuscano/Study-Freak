<?php
include 'server.php';
if (isset($_POST['sumbit'])){
$lName = $_POST['fname'];
$uName = $_POST['uname'];
$Email = $_POST['email'];
$Phone = $_POST['pnum'];
$Password = $_POST['pass'];
// $Address = $_POST['address'];
$Gender = $_POST['gender'];

$sql = "INSERT INTO studyfreak set name='$lName',user='$uName',email='$Email', phone='$Phone',password='$Password', gender='$Gender'";
if(mysqli_query($connect,$sql)){
    echo "Data inserted successfully";
}
else{
    echo "Data insertion failed";
}
}

?>