<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$location = $_POST['user_location'];
$destination = $_POST['user_destination'];
$request = $_POST['user_request'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sla.vo@mail.ru';                 // Наш логин
$mail->Password = 'vojdaevslava';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('sla.vo@mail.ru', 'LTS company');   // От кого письмо 
$mail->addAddress('skorpion.16@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . ' <br>
	Электронная почта: ' . $email . ' <br>
	Откуда: ' . $location . ' <br>
	Куда: ' . $destination . ' <br>
	Отзыв: ' . $request . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>