<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$name = $_POST['Username'];
$mail = $_POST['Usermail'];
$address = $_POST['Useraddress'];

$sql = "INSERT INTO users (usr_name, usr_email, usr_address)
VALUES ('$name', '$mail', '$address')";

if ($conn->query($sql) === TRUE) {
    
    echo "New record created successfully";

} else {
    
    echo "Error: " . $sql . "<br>" . $conn->error;

}

$conn->close();

 ?>