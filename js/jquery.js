
	"use strict";

	$(document).keydown(function(event){
	console.log(event.keyCode);
});

var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var keys = new Array(code.length);

$(document).on('keydown', function (event){
	keys.shift();
	keys.push(event.which);

	if (!keys.some(function (e, i) {return e !== code[i] }))
		$('head').append("<link href='./' rel='stylesheet'><link/>")

});

