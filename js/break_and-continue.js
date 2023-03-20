"use strict"

var userNumber = Number(prompt("choose an odd number between 1 and 50"))

for(var i = 1; i < 50; i+=2) {


    if (i === userNumber) {
        console.log('Oopsies! you forgot ' + userNumber + ' !');

        continue;
    }
    console.log('odd number ' + i)

}