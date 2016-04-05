$(document).ready(function() {
	$('.ajaxForm').submit(function(event) {
		if($(this).valid()) {
			var form = $(this);
			event.preventDefault();
			var formData = new FormData($(this)[0]);

			form.find('input[type=submit], button[type=submit]').attr('disabled','disabled');
			form.find('input[type=submit], button[type=submit]').css('opacity','0.3');
			form.find('.alerta').remove();
			form.find('input[type=submit], button[type=submit]').after('<div class="ajaxForm-alert ajaxForm-alert--loading">Aguarde...</div>');

			setTimeout(function(){
				$.ajax({
			        type: "POST",
			        enctype: 'multipart/form-data',
			        async: false,
			        crossDomain: true,
			        url: "http://www.linceweb.com.br/submit.php",
			        data: formData,
			        error: function (XMLHttpRequest, textStatus, errorThrown) {
			          alert("Erro ao carregar dados. Por favor tente novamente mais tarde.");
			          console.log(XMLHttpRequest+'-'+textStatus+'-'+errorThrown);
					},
			        success: function(retorno) {
			          	console.log(retorno);
					  	form.find('.ajaxForm-alert').remove();
					  	form.find('input[type=submit], button[type=submit]').after('<div class="ajaxForm-alert ajaxForm-alert--sucess">Mensagem enviada!</div>');
			        },
			        beforeSend: function(){
						console.log('beforeSend');
			        },
			        complete: function(){
			        	form[0].reset();
			        	form.find('input[type=submit], button[type=submit]').removeAttr('disabled');
						form.find('input[type=submit], button[type=submit]').css('opacity','1');
			        },
			        cache: false,
			        contentType: false,
			        processData: false
				});
			}, 100);
			return false;
		}
	});
});