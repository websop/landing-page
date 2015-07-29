<?php
	$mensaje.= "\nDesde: websop.es";
	$mensaje.= "\nDe: ". $_POST['mail'];
	$mensaje.= "\nE-mail: ".$_POST['email'];

	$destino  = 'info@websop.com' . ', ';
	$destino .=  'cerquita@gmail.com';
	$remitente = $_POST['email'];
	$asunto = "Mensaje enviado por: ".$_POST['nombre'];
	mail($destino,$mensaje,"From: $remitente");

	echo "Mensaje enviado, gracias por contar con nosotros.";
?>
