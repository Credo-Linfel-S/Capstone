<?php
$servername = "localhost";
$username = "root"; // XAMPP default MySQL username
$password = ""; // XAMPP default MySQL password
$dbname = "barangay3_capstone"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve event data
$sql = "SELECT * FROM barangay3_events"; // Adjust table and field names
$result = $conn->query($sql);

$events = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $events[] = $row;
    }
} else {
    $events = array("message" => "No events found.");
}

echo json_encode($events);

$conn->close();
?>
