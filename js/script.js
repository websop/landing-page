function cargaSendMail(){
	$("#c_enviar").attr("disabled", true);
	$(".c_error").remove();

	var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9]+.[A	-Za-z0-9_.]+[A-za-z]$/;
	var s_email = $('#c_mail').val();
//	var s_name = $('#c_name').val();
//	var s_msg = $('#c_msg').val();

	if (filter.test(s_email)){
		sendMail = "true";
	}
	else {
		$('#c_mail').after("<span class='c_error' id='c_error_mail'>Escriba un e-mail válido</span>");
		 //Color de borde si se	encontro algún error en el envío
		$('#contactform').css("border-color","#e74c3c")	;
		sendMail = "false";
	}
/*	
	if (s_name.length == 0 ) {
		$('#c_name').after( "<span class='c_error' id='c_error_name'>Escriba su nombre</spa>" );
		var sendMail = "false";
		}
	if (s_msg.length == 0 ){
		$('#c_msg').after( "<span class='c_error' id='_error_msg'>Escriba un mensaje</spa>" );
		var sendMail = "false";
	}
*/

	if(sendMail == "true") {
		var datos = {
//			"nombre" : $('#c_name').val(),
			"email" : $('#c_mail').val()
//			"mensaje" : $('#c_msg').val()
		};

		$.ajax({
			data:  datos,
			url:   'process.php',
			type:  'post',
			beforeSend: function () {
			//Color de borde si el envío es correcto
				$('#contactform').css("color","#04EF28");
				$("#c_enviar").val("Enviando...");
				 },

				 success:  function (response) {
						$('form')[0].reset();
						$("#c_enviar").val("Enviar");
						$("#c_information p").html(response);
						$("#c_information").fadeIn('slow');
						$("#c_enviar").removeAttr("disabled");
				 }
		});
	}
	else{
		$("#c_enviar").removeAttr("disabled");
	}
};

/*
	$(function(){
	   
	    $('#c_enviar').click(function(){
	       $(':input','#contactform')
	 .not(':button, :submit, :reset, :hidden')
	 .val('')
	 .removeAttr('checked')
	 .removeAttr('selected');
	    }); 
    
});*/
$(document).ready(function() {

	/***************** Waypoints ******************/

		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated fadeInLeft');
		}, {
			offset: '75%'
		});
		$('.wp2').waypoint(function() {
			$('.wp2').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});
		$('.wp3').waypoint(function() {
			$('.wp3').addClass('animated bounceInDown');
		}, {
			offset: '75%'
		});
		$('.wp4').waypoint(function() {
			$('.wp4').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});

	/***************** Fancybox ******************/

		$(".youtube-media").on("click", function(e) {
			var jWindow = $(window).width();
			if (jWindow <= 768) {
				return;
			}
			$.fancybox({
				href: this.href,
				padding: 4,
				type: "iframe",
				'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			});
			return false;
		});
});

$(document).ready(function() {
		$("a.single_image").fancybox({
			padding: 4,
		});
});

/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
		$(".nav-toggle").click(function() {
			$(this).toggleClass("active");
			$(".overlay-boxify").toggleClass("open");
		});

	/* When user clicks a link */
		$(".overlay ul li a").click(function() {
			$(".nav-toggle").toggleClass("active");
			$(".overlay-boxify").toggleClass("open");
		});

	/* When user clicks outside */
		$(".overlay").click(function() {
			$(".nav-toggle").toggleClass("active");
			$(".overlay-boxify").toggleClass("open");
		});

/***************** Smooth Scrolling ******************/

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});


