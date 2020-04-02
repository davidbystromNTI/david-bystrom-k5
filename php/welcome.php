<?php
$servername = "localhost";
$username = "root";
$password = "Vinter2019**";
$dbname = "accounts";

$usernameforUser = $_POST["username"];
$passwd = $_POST["passwd"];
$email = $_POST["email"];
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];

$hash = password_hash($passwd, PASSWORD_DEFAULT);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("insert into user(username, password, email, firstName, lastName)
values(?, ?, ?, ?, ?)");
$stmt-> bind_param("sssss", $usernameforUser, $hash, $email, $firstName, $lastName);
$stmt->execute();
echo "Du äger";

header("Location: /webTest/startPage.html");

if ($conn->query($stmt) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt . "<br>" . $conn->error;
}
$stmt->close();
$conn->close();



?>
