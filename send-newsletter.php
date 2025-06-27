<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $user_message = htmlspecialchars(trim($_POST["message"])); // <- mensaje libre

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    $to = "lucasmagan10@gmail.com";
    $subject = "New Newsletter Subscription";

    $message = "New subscription:\n\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Message: $user_message\n"; // <- mensaje agregado

    $headers = "From: no-reply@aires-soft.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! We'll be in touch.";
    } else {
        echo "There was an error sending your email.";
    }
}
?>
