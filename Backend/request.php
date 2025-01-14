<?php

session_start(); // Start the session
//header("Content-Type: application/json"); // Set content type for API responses

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
    // Check if an image was uploaded
    

    // Rest of your form handling logic
    $Date = $conn->real_escape_string($_POST['Date'] ?? '');
    $request = $conn->real_escape_string($_POST['request'] ?? '');
   $username = $_POST['username'];
    $Phone_number = $_POST['Phone_number'];

    // Insert into database with image path
    $stmt = $conn->prepare("INSERT INTO user_request (Regid, username, Date, Phone_number, request) VALUES ( ?, ?, ?, ?, ?)");
    $stmt->bind_param("issss", $Regid, $username, $Date, $Phone_number, $request );

    if ($stmt->execute()) {
        header('Location: ../request.html');
        exit();
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}


$conn->close();

