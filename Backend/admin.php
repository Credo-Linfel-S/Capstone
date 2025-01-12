<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $admins_password = $_POST['admins_password'];

    // Validate credentials with database
    $conn = new mysqli('localhost', 'root', '', 'barangay3_capstone');

    if ($conn->connect_error) {
        echo "Database connection failed.";
        exit();
    }

    $query = "SELECT admin_id FROM admins_account WHERE admins_password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $admins_password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "success"; // Send success message to JavaScript
    } else {
        echo "Invalid login credentials."; // Send error message to JavaScript
    }

    $stmt->close();
    $conn->close();
}
?>
