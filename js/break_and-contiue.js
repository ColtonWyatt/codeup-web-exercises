"use strict"

for(var i = 1; i < 50; i+=2) {


    if (i === userNumber) {
        console.log('Oopsies! you forgot ' + userNumber);

        continue;
    }
    console.log('all the odds ' + i + '!')

}