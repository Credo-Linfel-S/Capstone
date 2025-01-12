<?php
$conn = new mysqli('localhost', 'root', '', 'barangay3_capstone');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
