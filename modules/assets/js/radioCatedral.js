/*
	radioLucas 0.1
	Este é um simples plugin para jQuery.
	radioLucas nos fornece funções para players de audio em HTML5;

	Essas funções são:
		radio.play();
		radio.pause();
		radio.trigger();
		radio.volume("up, down, ou mute");

	Variaveis globais que podem ser usadas como callbacks:
		window.radioIsPlaying
		window.radioIsStop

	Classes que são adicionadas ao HTML de acordo com as funções executadas:
		.volumeMinimum
		.volumeMaximum
*/


var radio = {}, radioSelector = $('#webradio');

radio = {
	trigger: function(){
		if(radioIsPlaying == true){
			radio.pause();
		} else {
			radio.play();
		}
	},
	pause: function(){
		radioSelector.trigger('pause');
		console.log("The player has been paused");
		window.radioIsPlaying = false;
		window.radioIsStop = true;
		$('html').removeClass('radioIsPlaying');
		$('html').addClass('radioIsStop');
	},
	play: function(){
		radioSelector.trigger('play');
		console.log("The player has been started");
		window.radioIsStop = false;
		window.radioIsPlaying = true;
		$('html').addClass('radioIsPlaying');
		$('html').removeClass('radioIsStop');
	},
	setVolume: function(volume){
		// var volumeStatus = radioSelector.prop("volume", volume);
		radioSelector.prop("volume", volume);
	},
	volume: function(action){
		if(action == false){
			radioSelector.prop("volume", 0);
			console.log("The volume has been set in "+ 0);
		}
		if(action == true){
			radioSelector.prop("volume", 1);
			console.log("The volume has been set in"+ 1);
		}
		if(action == "mute"){
			radioSelector.prop("muted",!radioSelector.prop("muted"));
			console.log("The mute button has been pressed");
			$('html').toggleClass('volumeMinimum');
		}
		if(action == "up"){
			var volumeStatus = radioSelector.prop("volume")+0.2;
			$('html').removeClass('volumeMinimum');
			if(volumeStatus >= 1){
				volumeStatus = 1;
				console.log("The maximum volume has been reached");
				$('html').removeClass('volumeMinimum');
				$('html').addClass('volumeMaximum');
			}
			if(volumeStatus < 1){
				radioSelector.prop("volume", volumeStatus);
			}
			if(volumeStatus != 1){
				console.log("The volume has been set in "+volumeStatus);
			}
		}
		if(action == "down"){
			var volumeStatus = radioSelector.prop("volume")-0.2;
			$('html').removeClass('volumeMaximum');
			if(volumeStatus < 0){
				volumeStatus = 0;
				console.log("The minimum volume has been reached");
				$('html').addClass('volumeMinimum');
				$('html').removeClass('volumeMaximum');
			}
			if(volumeStatus > 0){
				radioSelector.prop("volume", volumeStatus);
			}
			if(volumeStatus != 0){
				console.log("The volume has been set in "+volumeStatus);
			}
		}
	}
}

radioSelector.on("canplay", function(){
	$('.catedral-radio-control-big').trigger('click');
});