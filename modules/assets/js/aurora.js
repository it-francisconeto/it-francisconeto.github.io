var spinner = {},
	spinnerMax = 10,
	spinnerMin = 1,

spinner = {
	status: function(selector){
		spinnerTarget = $(selector).parent().find('input[type="number"]');
		spinnerQtd = $(selector).parent().find('input[type="number"]').val();
		spinnerMax = $(selector).parent().find('input[type="number"]').attr('max');
		spinnerQtd = parseInt(spinnerQtd);
		spinnerMax = parseInt(spinnerMax);
		return spinnerQtd;
		return spinnerMax;
	},
	up: function(selector){
		spinner.status(selector);
		spinnerQtd = spinnerQtd + 1;
		spinnerTarget.val(spinnerQtd);
	},
	down: function(selector){
		spinner.status(selector);
		spinnerQtd = spinnerQtd - 1;
		spinnerTarget.val(spinnerQtd);
	},
	change: function(selector){
		spinner.status(selector);
		if(spinnerQtd > spinnerMax){
			spinnerTarget.val(spinnerMax);
		}
	}
}