<?php
// Database configuration
$servername = "localhost";
$username = "root"; // replace with your database username
$password = ""; // replace with your database password
$dbname = "user_database";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$user_username = $_POST['username'];
$user_email = $_POST['email'];
$user_number = $_POST['number'];
$user_password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (username, email, number, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $user_username, $user_email, $user_number, $user_password);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
