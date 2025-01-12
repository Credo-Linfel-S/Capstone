<?php
session_start();
include('db.php');
// Check if the user is logged in
if (!isset($_SESSION['Reg_id'])) {
    // Redirect to login page if not logged in
    header('Location: ../index.html');
    exit();
}

// Fetch user data from session
$userData = [
    'Regid'=> $_SESSION['Regid'] = $row['Regid'],
    'username' => $_SESSION['username'],
    'age' => $_SESSION['age'],
    'user_location' => $_SESSION['user_location'],
    'phone_number' => $_SESSION['phone_number'],
    'loginEmail' => $_SESSION['loginEmail']
];

// Return data as JSON
echo json_encode($userData);
exit();
?>
