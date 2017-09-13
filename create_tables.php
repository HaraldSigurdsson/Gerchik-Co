<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

try {
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql_users =  "CREATE TABLE IF NOT EXISTS users (
            id int(11) NOT NULL AUTO_INCREMENT,
            usr_name varchar(256) NOT NULL,
            usr_email varchar(256) NOT NULL,
            usr_address varchar(256) NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1";
    
    $sql_accounts = "CREATE TABLE IF NOT EXISTS accounts (
            id int(11) NOT NULL AUTO_INCREMENT,
            account int(11) NOT NULL,
            user_id int(11) NOT NULL,
            added datetime NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (user_id)
            REFERENCES users(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1";

    $conn->exec($sql_users);
    $conn->exec($sql_accounts);

    }
    catch(PDOException $e) {
   
    echo $sql_users . "<br>" . $e->getMessage();
    echo $sql_accounts . "<br>" . $e->getMessage();

    }

    $conn = null;

?>