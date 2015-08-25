<?php

	$mensaje = "\nDesde: info@websop.es";
	$mensaje .= "\nE-mail: ".$_POST['email'];
	$mensaje .= "\n-----------\n";
	$destino = "cerquita@gmail.com";
	//$destino .= "info@websop.es"
	$remitente = $_POST['email'];
	$asunto = "Mensaje enviado por: ".$_POST['email'];

	echo "Mensaje enviado, antes de mail.";

	mail($destino,$asunto,$mensaje);

	echo "Mensaje enviado, gracias por contar con nosotros.";

?>
