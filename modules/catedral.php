<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Catedral Metropolitana de Sant'ana</title>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<link rel="stylesheet" href="assets/css/proverbios.css">
	<link rel="stylesheet" href="assets/css/font-awesome.css">
	<link rel="stylesheet" href="assets/css/catedral.css">
	<script type="text/javascript" src="assets/js/jquery-2.2.2.min.js"></script>
</head>
<body class="app-hold">
	<div class="catedral-radio">
		<div class="section catedral-radio-header">
			<span class="catedral-radio-logo">
				<img class="fit-img" src="assets/imagens/webradio.png" alt="">
			</span>
			<span class="catedral-radio-info">
				<span class="section catedral-radio-title">WebRádio Senhora Santa’ana</span>
				<span class="section catedral-radio-live">AO VIVO</span>
			</span>
		</div>
		<div class="section catedral-radio-volume">
			<div class="section catedral-radio-volume-bar-container">
				<div class="section catedral-radio-volume-bar">
				</div>
				<div class="catedral-radio-volume-drag-container">
					<div class="catedral-radio-volume-drag"><i class="fa fa-volume-up"></i></div>
				</div>
			</div>
		</div>
		<div class="section catedral-radio-control">
			<div class="catedral-radio-control-small"><i class="fa fa-list-ul"></i></div>
			<div onclick="radio.pause()" class="catedral-radio-control-small"><i class="fa fa-stop"></i></div>
			<div onclick="radio.play()" class="catedral-radio-control-big"><i class="fa fa-play"></i></div>
			<div class="catedral-radio-control-small"><i class="fa fa-whatsapp"></i></div>
			<div class="catedral-radio-control-small"><i class="fa fa-facebook"></i></div>
		</div>
		<div class="catedral-radio-animate">
			<span class="catedral-radio-animate-target" data-level="1"></span>
			<span class="catedral-radio-animate-target" data-level="2"></span>
			<span class="catedral-radio-animate-target" data-level="3"></span>
			<span class="catedral-radio-animate-target" data-level="4"></span>
			<span class="catedral-radio-animate-target" data-level="5"></span>
			<span class="catedral-radio-animate-target" data-level="6"></span>
			<span class="catedral-radio-animate-target" data-level="7"></span>
			<span class="catedral-radio-animate-target" data-level="8"></span>
			<span class="catedral-radio-animate-target" data-level="9"></span>
			<span class="catedral-radio-animate-target" data-level="10"></span>
			<span class="catedral-radio-animate-target" data-level="11"></span>
			<span class="catedral-radio-animate-target" data-level="12"></span>
			<span class="catedral-radio-animate-target" data-level="13"></span>
			<span class="catedral-radio-animate-target" data-level="14"></span>
			<span class="catedral-radio-animate-target" data-level="15"></span>
			<span class="catedral-radio-animate-target" data-level="16"></span>
			<span class="catedral-radio-animate-target" data-level="17"></span>
			<span class="catedral-radio-animate-target" data-level="18"></span>
			<span class="catedral-radio-animate-target" data-level="19"></span>
			<span class="catedral-radio-animate-target" data-level="20"></span>
		</div>
	</div>
	<audio id="webradio" src="http://172.82.141.138:23072/;" autoplay="true">
	<script src="assets/js/jquery-ui.js"></script>
	<script src="assets/js/jquery.ui.touch-punch.min.js"></script>
	<script src="assets/js/radioCatedral.js"></script>
	<script>
		$(function(){
			jQuery.extend({
			    percentage: function(a, b) {
			        return Math.round((a / b) * 10);
			    }
			});

			radioSelector.prop("volume", 0);

			volumeBar = $('.catedral-radio-volume-bar-container').width() - 50;
			$('.catedral-radio-volume-drag-container').draggable({
				axis: "x",
				containment: "parent",
				drag: function(){
					pos = $('.catedral-radio-volume-drag-container').css('left');
					pos = parseInt(pos);
					pos = $.percentage(pos, volumeBar) / 10;
					radioSelector.prop("volume", pos);
					console.log(pos);
				},
				create: function(){
					pos = $('.catedral-radio-volume-drag-container').css('left');
					pos = parseInt(pos);
					pos = $.percentage(pos, volumeBar) / 10;
					radioSelector.prop("volume", pos);
					console.log(pos);
				}
			});
			function getVolume(){

			}
		});
	</script>
</body>
</html>