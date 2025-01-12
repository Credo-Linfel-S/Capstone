<?php


header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate'); // Prevent caching

$response = ['exists' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $loginEmail = $_POST['loginEmail'] ?? '';
   

    if (!empty($loginEmail) || !empty($phone_Number)) {
        $stmt = $conn->prepare("SELECT Regid FROM users_account WHERE loginEmail = ?");
        $stmt->bind_param("s", $loginEmail);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $response['exists'] = true;
    $response['message'] = 'Email already exists. Please use a different email address.';
        } else {
            $response['message'] = 'Account does not exist.';
        }

        $stmt->close();
    } else {
        $response['message'] = 'Email or phone number is required.';
    }

    $conn->close();
}

echo json_encode($response);
?>
