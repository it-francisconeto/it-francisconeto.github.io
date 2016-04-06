var popMenu = {};
popMenu = {
	toggle: function(){
		if($('html').hasClass('popMenu--open')){
			$('html').removeClass('popMenu--open');
		} else {
			$('html').addClass('popMenu--open');
		}
	},
	open: function(){
		$('html').addClass('popMenu--open');
	},
	close: function(){
		$('html').removeClass('popMenu--open');
	},
	markup: function(menu){
		var htmlStart = '<section class="popMenu"><div class="popMenu-inner"><ul class="popMenu-list">';
		var htmlEnd = '</ul></div></section>';
		var lastChild = '<li class="popMenu-out"><span>Voltar</span></li>';
		return htmlStart+menu+lastChild+htmlEnd;
	},
	create: function(selector){
		selector = $(selector).html();
		var result = popMenu.markup(selector);
		$('body').append(result);
	},
}

$('html, body, section, footer, header').click(function(e){
	popMenu.close();
});

$('.popMenu-inner').click(function (event) {
	event.stopPropagation();
});

$('.popMenu-out').click(function(){
	popMenu.close();
});

// Css find on popMenu.scss
$("head").append("<style>.popMenu{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.6);overflow:hidden;opacity:0;pointer-events:none;transition:0.2salllinear;}.popMenu--open.popMenu{pointer-events:all;opacity:1;}.popMenu-inner{position:absolute;width:70%;min-height:100px;background:white;left:50%;top:50%;transform:translate(-50%,-50%);}.popMenu-listli{padding:10px15px;font-size:14px;text-transform:uppercase;}.popMenu-listli+li{border-top:1pxsolidrgba(51,51,51,0.10);}.popMenu-listlia{color:#333;}.popMenu-listli:hover,.popMenu-listli:focus,.popMenu-listli:active{background-color:rgba(0,0,0,0.04);}.popMenu-listli,.popMenu-list{float:left;width:100%;display:block;}.popMenu-out{font-weight:bold;font-size:12px;}</style>");