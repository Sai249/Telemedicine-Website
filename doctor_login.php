<?php
$conn = new mysqli('localhost', 'root', '', 'your_database');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM doctors WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    header("Location: doctor_dashboard.php"); // Redirect to Doctor Dashboard
    exit();
} else {
    echo "Invalid username or password";
}

$conn->close();
?>
