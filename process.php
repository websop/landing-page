<?php
	$mensaje.= "\nDesde: info@websop.es";
	$mensaje.= "\nDe: ". $_POST['nombre'];
	$mensaje.= "\nE-mail: ".$_POST['email'];
	$mensaje.= "\n-----------\n";
	$mensaje =  $_POST['mensaje'];
	$destino  = 'info@websop.es' . ', ';
	$destino .=  'cerquita@gmail.com';
	$remitente = $_POST['email'];
	$asunto = "Mensaje enviado por: ".$_POST['nombre'];

	echo "Mensaje enviado, antes de mail.";


	mail($destino,$asunto,$mensaje);

	echo "Mensaje enviado, gracias por contar con nosotros.";
?>
