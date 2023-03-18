//WHILE LOOPS


// SYNTAX:

//while (/*condition*/) {
    // body
//}

//A while loop is a basic looping construct that will execute a code block as long as a certain condition is true.

//EXAMPLE:

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var i = 10;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}
// In the second example, the condition i < 10 is never true, so the code in the while loop never gets executed. Well, what if we wanted the code in the while loop to get executed at least one time regardless of whether the condition is met? That brings us to the do-while loop.

// DO WHILE LOOP

//A do-while loop is only different from a while in that the condition is evaluated at the end of the loop instead of the beginning

//SYNTAX:

//do {
//     //body
// } while(/*condition*/);

//EXAMPLE

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

//In this example, the code in the do block will get executed once before the while condition is checked. The condition is then checked to decide if the loop should continue. For the above example, the do block will only get executed once.

//FOR LOOPS:

//A for loop is a robust looping mechanism available in many programming languages. JavaScript's implementation syntax matches that of many other languages

//SYNTAX:

//for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

//EXAMPLE:

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

//In the example above, you can see that a for loop takes 3 expressions separated by semicolons.
//
// The first expression is called once before the first loop iteration starts and allows for initialization of loop variables. In the example, a variable i is created with an initial value of 0.
//
// The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration. In the example, the loop will run as long as i is less than the number 10.
//
// The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop counters takes place here.





