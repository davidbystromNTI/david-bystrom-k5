<?php

$Username = $_POST["UsernameLogin"];
$Passwd = $_POST["PasswdLogin"];
$score = 0;

$conn = new mysqli('localhost', 'root', 'Vinter2019**', 'accounts');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username, passwd FROM user WHERE BINARY username = '$Username' AND BINARY password = '$Passwd' ";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    echo "<p>" . "Username: " . $row["username"] . "</p>" . "<p>" . "Password: " . $row["password"] . "</p>";
    $score++;
}
else {
    echo "Wrong Username or Password";
}

$conn->close();

if ($score == 1) {
    header("Location: /webTest/tool.html");
}

?>
