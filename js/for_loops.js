"use strict"

function showMultiplicationTable(num){
    for(var i = 1; i <= 10; i++) {
        console.log(num, "x "  + i + ' = ' + ( num * i))
    }
}
showMultiplicationTable(7)

for(var i = 0; i < 10; i++ ) {
    let randomNumber = Math.floor(Math.random()* (200 -20)) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber);

        console.log('even');
    } else {
        console.log('odd');
    }
}
for(var i = 0; i < 10; i++ ){
    var string = "";
    console.log()
    for(var j = 0; j< i; j++){
        string = string + i;
    }
    console.log(string);
}


for(var i = 100; i >= 5; i -= 5 ){
    console.log('for loop iteration # ' + i);
}
var userNumber = Number(prompt("choose an odd number between 1 and 50"))


for(var i = 1; i < 50; i+=2) {


    if (i === userNumber) {
        console.log('Oopsies! you forgot ' + userNumber);

        continue;
    }
        console.log('all the odds ' + i + '!')

}
