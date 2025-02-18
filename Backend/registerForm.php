<?php
// Include the database connection
include 'db.php';

// Initialize variables
$message = "Registration Successfully";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $username = $_POST['username'];
    $age = $_POST['age'];
    $user_Location = $_POST['user_Location'];
    $Phone_number = $_POST['Phone_number'];
    $loginEmail = $_POST['loginEmail'];
    $loginPassword = $_POST['loginPassword'];

    // Validate form inputs
    if (!empty($username) && !empty($age) && !empty($user_Location) && !empty($Phone_number) && !empty($loginEmail) && !empty($loginPassword)) {
        // Hash the password for security
      
        $hash =  password_hash($loginPassword, PASSWORD_DEFAULT);
        // Prepare and execute SQL query
        $stmt = $conn->prepare("INSERT INTO users_account (username, age, user_Location, Phone_number, loginEmail, loginPassword) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sissss", $username, $age, $user_Location, $Phone_number, $loginEmail,$hash);

        if ($stmt->execute()) {
           header('Location: ../../index.html');
           exit();
        } else {
            $message = "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        $message = "Please fill in all fields.";
    }

    // Close the database connection
    $conn->close();
}
?>


