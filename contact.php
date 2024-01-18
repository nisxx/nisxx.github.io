<!-- contact.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add email sending or database storing logic here

    echo "Message sent successfully!";
}
?>
