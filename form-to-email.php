<?php if(isset($_POST['submit'])) {

  $first = $_POST['first'];
  $last = $_POST['last'];
  $company = $_POST['company'];
  $visitor_email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $email_from = 'charles@charlesmiller.dev';
  $email_subject = 'Portfolio Form Submission';
  $email_body = "You have received a new message from " . $first . " " . $last . " with " . $company .
  "\n\nEmail Address: " . $visitor_email .
  "\nPhone Number: " . $phone .
  "\nMessage:\n\n " . $message;

  $to = 'charles@charlesmiller.dev';
  $headers = 'From: ' . $visitor_email;

  $secretKey = "6LfIeVAgAAAAANIXD42CAPVLUTNBG19OJ9pB3rqY";
  $responseKey = $_POST['g-recaptcha-response'];
  $UserIP = $_SERVER['REMOTE_ADDR'];
  $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIP";

  $response = file_get_contents($url);
  $response = json.decode($response);

  if ($response->success) {
    mail($to, $email_subject, $email_body, $headers);
    echo "yay";
  } else {
    echo "Invalid Captcha, Please Try Again";
  }


  //Send email
  mail($to, $email_subject, $email_body, $headers);
  if (mail){
    //You need to redirect
    // echo 'Thanks! I\'ll get back to you ASAP!';
    header('Location: http://www.charlesmiller.dev/thank_you.html');
  }
  else{
    echo 'ERROR! Email was not sent';
  }
  } else {
    echo "That was bad";
}
?>