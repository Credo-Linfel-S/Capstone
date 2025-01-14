<?php

session_start(); // Start the session
header("Content-Type: application/json"); // Set content type for API responses

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "barangay3_capstone";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Check if the user is logged in
if (!isset($_SESSION['Regid'])) {
    echo json_encode(["success" => false, "message" => "You must log in first."]);
    exit();
}

// Logged-in user's ID
$Regid = $_SESSION['Regid'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $username = $_SESSION['username'];
     $Phone_number = $_POST['Phone_number'];
    $email = $_POST['email'];
      $user_message = $_POST['user_message'];
    
        
    // Insert into database with image path
    $stmt = $conn->prepare("INSERT INTO customer_service (Regid, username,email,Phone_number,user_message) VALUES (?,?,?,?,?)");
    $stmt->bind_param("isiss", $Regid, $username, $Phone_number, $email,$user_message );

    if ($stmt->execute()) {
        header('Location: ../../customerservice.html');
        exit();
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
    }


$conn->close();
?>
