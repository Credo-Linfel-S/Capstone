<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    http_response_code(401); // Unauthorized
    
    echo json_encode(["error" => "User not logged in"]);
    exit();
}

// Fetch user data from session
$userData = [
    'Regid' => $_SESSION['Regid'],
    'username' => $_SESSION['username'],
    'age' => $_SESSION['age'],
    'user_location' => $_SESSION['user_location'],
    'phone_number' => $_SESSION['phone_number'],
    'loginEmail' => $_SESSION['loginEmail']
];

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($userData);
exit();
?>
