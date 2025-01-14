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
    $Phone_Number = $_POST['Phone_Number'];
    $loginEmail = $_POST['loginEmail'];
    $loginPassword = $_POST['loginPassword'];

    // Validate form inputs
    if (!empty($username) && !empty($age) && !empty($user_Location) && !empty($phone_Number) && !empty($loginEmail) && !empty($loginPassword)) {
        // Hash the password for security
      
        $hash =  password_hash($loginPassword, PASSWORD_DEFAULT);
        // Prepare and execute SQL query
        $stmt = $conn->prepare("INSERT INTO users_account (username, age, user_Location, Phone_Number, loginEmail, loginPassword) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sissss", $username, $age, $user_Location, $Phone_Number, $loginEmail,$hash);

        if ($stmt->execute()) {
           header('Location: ../index.html');
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


