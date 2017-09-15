<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
    
} 

$show_sql = mysqli_query($conn, "SELECT * FROM users, accounts WHERE users.id = accounts.user_id");
	
	echo "<table class='table table-striped'>";

    echo "<tr>";
	   echo "<th>Name</th>";
	   echo "<th>Email</th>";
	   echo "<th>Address</th>";
	   echo "<th>Accounts</th>";
	   echo "<th>Date added</th>";
    echo "<tr>";
	
	while($row=mysqli_fetch_array($show_sql)) {

		echo "<tr>";
		   echo "<td class='success'>" . $row['usr_name'] . "</td>";
		   echo "<td class='success'>" . $row['usr_email'] . "</td>";
		   echo "<td class='success'>" . $row['usr_address'] . "</td>";
	       echo "<td class='success'>" . $row['account'] . "</td>";
	       echo "<td class='success'>" . $row['added'] . "</td>";
	    echo "<tr>";
		
	}

	echo "</table>";

	$conn->close();

 ?>