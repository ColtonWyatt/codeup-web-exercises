"use strict"

var i = 2

while (i < 66000) {
	console.log(i);
	i=i+i;

}

var allCones = Math.floor(Math.random() * 50) + 50;

console.log('OK I have to sell ' + allCones);

do {var customerCones = Math.floor(Math.random() * 5) +1;

	allCones = allCones - customerCones
	console.log(customerCones + ' cone\(s\) sold!');


		if (customerCones > allCones) {

			console.log("I'm sorry but I only have " + allCones + ' cones left');
			break;
		} else {

	}

	console.log(allCones + ' cones remaining');

} while (allCones > 0 && allCones > customerCones)
console.log(allCones + ' cans sold. YES!! I can finally go home!!!')

