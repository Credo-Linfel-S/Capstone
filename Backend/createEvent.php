<?php
// Database connection
$host = 'localhost';
$dbname = 'barangay3_capstone';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Check if the request is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $eventname = $_POST['eventname'] ?? '';
    $Date = $_POST['Date'] ?? '';
    $eventmessage = $_POST['eventmessage'] ?? '';
    $eventimage = '';

    // Handle image upload
    if (isset($_FILES['eventimage']) && $_FILES['eventimage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/'; // Directory where images will be stored
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $imageName = basename($_FILES['eventimage']['name']);
        $eventimage = $uploadDir . uniqid() . '_' . $imageName;

        if (move_uploaded_file($_FILES['eventimage']['tmp_name'], $eventimage)) {
            echo "The image has been uploaded successfully.";
        } else {
            echo "Failed to upload image.";
            exit();
        }
    }

    // Insert event details into the database using bindParam() in PDO
    try {
        $stmt = $pdo->prepare("INSERT INTO barangay3_events (eventname, Date, eventmessage, eventimage) VALUES (?, ?, ?, ?)");

        // Binding parameters to the prepared statement
        $stmt->bindParam(1, $eventname, PDO::PARAM_STR);
        $stmt->bindParam(2, $Date, PDO::PARAM_STR);
        $stmt->bindParam(3, $eventmessage, PDO::PARAM_STR);
        $stmt->bindParam(4, $eventimage, PDO::PARAM_STR);

        // Execute the query
        $stmt->execute();
header('location: ../../adminform.html');
exit();
        echo "Event created successfully.";
    } catch (PDOException $e) {
        echo "Failed to save event details to the database: " . $e->getMessage();
    }
}
?>
