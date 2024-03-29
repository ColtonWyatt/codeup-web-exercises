"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === 'blue'){
        alert(" Everybody likes blue");
    } else if (color === 'red'){
        alert(" Oh thats cool!");
    } else if (color === 'green'){
        alert(" Sweet! Green is my favorite color too!");
    } else {
        alert(color + " is such an odd color to be a favorite");
    }
}
console.log(analyzeColor('purple'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
analyzeColor(randomColor);
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch (randomColor) {

    case "blue":
        console.log(" Everybody likes blue");
        break;
    case "red":
        console.log(" Oh that's cool!");
        break;
    case "green":
        console.log(" Sweet! That's my favorite color too!");
    default:
        console.log(randomColor + " is such an odd color to be a favorite");
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var usersFavColor = prompt("What is your favorite color?")

analyzeColor(usersFavColor)
console.log(analyzeColor(usersFavColor))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var numberChoices = [0, 1, 2, 3, 4, 5]
var luckyNumber = numberChoices[Math.floor(Math.random() * numberChoices.length)]
console.log(luckyNumber)
var price = (Number(prompt("what is your total today?")))
function calculateTotal(luckyNumber, price) {
      if (luckyNumber === 0) {
        return price - (price * 0);
      } else if (luckyNumber === 1) {
          return price - (price * .10) ;
      } else if (luckyNumber === 2) {
          return price - (price * .25);
      } else if (luckyNumber === 3) {
          return price - (price * .35);
      } else if (luckyNumber === 4) {
          return price - (price * .50);
      } else if (luckyNumber === 5) {
          return price - (price * 1.);
      }
}
console.log(calculateTotal(1, price))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
calculateTotal(luckyNumber)
alert('your number was ' + luckyNumber + ' your price before discount was ' + price + ' dollars, your new price is ' + calculateTotal(luckyNumber, price))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var question = (confirm('Would you like to enter a number?'))

function inputNumber (question){

    if (question == true) {
        return prompt('What number would you like to input?');
    }
}

var userNumber = inputNumber(question);

function checkInput (userNumber){
    if (isNaN(userNumber)){
        alert("This is NOT a number");

    }
}
checkInput(userNumber)

function oddOrEven () {
    if (userNumber % 2 == 0){
        alert("your number was even");
    }else {
        alert('your number was odd');
    }
}
oddOrEven()

function addOneHundred (){
    var plusOneHundred = (Number(userNumber) + (Number(100)));
    alert('your number added to 100 is ' + plusOneHundred);
}
addOneHundred();

function positiveOrNegative () {
    if (userNumber < 0){
        alert("your number is negative");

    }else {
        alert('your number is positive');
    }
}
positiveOrNegative();































