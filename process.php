<?php

//$mensaje = "\nDesde: info@websop.es";
//	$mensaje .= "\nDe: ". $_POST['nombre'];
//	$mensaje .= "\nE-mail: ".$_POST['email'];
//	$mensaje .= "\n-----------\n";
//	$mensaje .=  $_POST['mensaje'];
//	$destino = "cerquita@gmail.com" . ", ";
//	$destino .=  "magulaiz@gmail.com";
//	$remitente = $_POST['email'];
//	$asunto = "Mensaje enviado por: ".$_POST['nombre'];
//
//	echo "Mensaje enviado, antes de mail.";
//
//
//	mail($destino,$asunto,$mensaje);
//
//	echo "Mensaje enviado, gracias por contar con nosotros.";


/*

		mailtest.php

*/

require("class.phpmailer.php");
require("class.smtp.php");

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$body = "La cuenta &lt;" . $_POST['email'] . "&gt; desea suscribirse al Bolet&iacute;n de Noticias de Websop.";


$mail->IsSMTP();

// la dirección del servidor, p. ej.: smtp.servidor.com
$mail->Host = "smtp.websop.es";

// dirección remitente, p. ej.: no-responder@miempresa.com
$mail->From = $_POST['email'];

// nombre remitente, p. ej.: "Servicio de envío automático"
$mail->FromName = "Suscriptor: " . $_POST['email'];

// asunto y cuerpo alternativo del mensaje
$mail->Subject = "Suscripción a Boletín de Noticias";
$mail->AltBody = "La cuenta &lt;" . $_POST['email'] . "&gt; desea suscribirse al Bolet&iacute;n de Noticias de Websop.";

// si el cuerpo del mensaje es HTML
$mail->MsgHTML($body);

// podemos hacer varios AddAdress
$mail->AddAddress("info@websop.es", "Websop");

// si el SMTP necesita autenticación
$mail->SMTPAuth = true;

// credenciales usuario
$mail->Username = "info@websop.es";
$mail->Password = "w3BS0P-.,";

if(!$mail->Send()) {
	echo "Error enviando: " . $mail->ErrorInfo;
} else {
	echo "Mensaje enviado, gracias por contar con nosotros.";
}

?>
