<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "htdb";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// First SQL query
$sql1 = "SELECT CemeteryName, LocationName FROM cemeteries";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
    $data1 = array();
    while ($row = $result1->fetch_assoc()) {
        $data1[] = $row;
    }
} else {
    $data1 = array();
}

// Second SQL query
$sql2 = "SELECT SectionCode, TotalGraves FROM sections";
$result2 = $conn->query($sql2);

if ($result2->num_rows > 0) {
    $data2 = array();
    while ($row = $result2->fetch_assoc()) {
        $data2[] = $row;
    }
} else {
    $data2 = array();
}

// Close the database connection
$conn->close();

// Combine the data from both queries into a single JSON response
$response = array(
    'cemeteries' => $data1,
    'sections' => $data2
);

echo json_encode($response);
?>
