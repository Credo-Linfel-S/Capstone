<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['loginEmail'];
    $password = $_POST['loginPassword'];

    // Validate credentials with database
    $conn = new mysqli('localhost', 'root', '', 'barangay3_capstone');

    if ($conn->connect_error) {
        echo "Database connection failed.";
        exit();
    }

    $query = "SELECT Regid, username, age, user_location, phone_number, loginPassword, loginEmail FROM users_account WHERE loginEmail = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    if ($row) {
        // Set session variables for logged-in user
        $hash = $row["loginPassword"];
        
        if(password_verify($password, $hash)){
            $_SESSION['Regid'] = $row['Regid'];
            $_SESSION['user_id'] = $row['Regid'];
            $_SESSION['username'] = $row['username'];
            $_SESSION['age'] = $row['age'];
            $_SESSION['user_location'] = $row['user_location'];
            $_SESSION['phone_number'] = $row['phone_number'];
            $_SESSION['loginEmail'] = $row['loginEmail'];

        }else{
            echo "Invalid login credentials.";
        }
        

        echo "success"; // Respond with success message
    } else {
        echo "Invalid login credentials."; // Respond with error message
    }

    $stmt->close();
    $conn->close();
}
?>
