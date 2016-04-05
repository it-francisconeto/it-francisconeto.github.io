
// jQuery Spinner;
spinner = {
	status: function(el){
		spinnerTarget = $(el).parent().find('input[type="number"]');

		spinnerQtd = parseInt(spinnerTarget.val());
		spinnerMax = parseInt(spinnerTarget.attr('max'));
		spinnerMin = parseInt(spinnerTarget.attr('min'));

		return spinnerQtd;
		return spinnerMax;
		return spinnerMin;
	},
	up: function(el){
		spinner.status(el);
		spinnerQtd = spinnerQtd + 1;
		if(spinnerQtd <= spinnerMax){
			spinnerTarget.val(spinnerQtd);
		}
	},
	down: function(el){
		spinner.status(el);
		spinnerQtd = spinnerQtd - 1;
		if(spinnerQtd >= spinnerMin){
			spinnerTarget.val(spinnerQtd);
		}
	},
	change: function(el){
		spinner.status(el);
		if(spinnerQtd > spinnerMax){
			spinnerTarget.val(spinnerMax);
		}
	}
}