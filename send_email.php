<?php
// Set CORS headers to allow form submission
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : 'Not provided';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    
    // Check if required fields are empty
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please fill all required fields."]);
        exit;
    }
    
    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please enter a valid email address."]);
        exit;
    }
    
    // Set email parameters
    $to = "baazelectrical@hotmail.com";
    $subject = "New Contact Form Submission - BAAZ Electrical Group";
    
    // Set headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Bcc: shubharthaksangharsha21@gmail.com" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Build email content
    $email_content = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #333; }
            .details { margin-bottom: 20px; }
            .details strong { color: #555; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>New Contact Form Submission</h2>
            <div class='details'>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </div>
            <p>This email was sent from the contact form on the BAAZ Electrical Group website.</p>
        </div>
    </body>
    </html>
    ";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank you for your message. We'll get back to you shortly!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong. Please try again later."]);
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission. Please try again."]);
}
?> 