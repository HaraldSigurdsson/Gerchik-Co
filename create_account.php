<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$t=time();
$current_date = date("Y-m-d",$t);
$mail = $_POST['Usermail'];
$account = $_POST['Accountvalue'];

$sql = "INSERT INTO accounts (account, user_id, added)
VALUES ('$account', '1', '$current_date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully" . $account . $current_date;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

 ?>