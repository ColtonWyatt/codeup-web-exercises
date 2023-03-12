"use strict";

console.log('Hello from JavaScript');


alert('Welcome to my Website!');
    var favoriteColor = prompt('What is your favorite color?');
    console.log('The users favorite color is: ' + favoriteColor);
alert('Awesome! ' + favoriteColor + ' is my favorite color too!');

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    var pricePerDay = 3.00;

    var theLittleMermaid = (Number(prompt(' How many days would you like The Little Mermaid?')));
        console.log(theLittleMermaid);

    var brotherBear = (Number(prompt('How many days would your like Brother Bear? ')));
        console.log(brotherBear);

    var herculese = (Number(prompt('How many days would you like Herculese? ')));
        console.log(herculese);

    var totalCost = ((theLittleMermaid + brotherBear + herculese) * pricePerDay);
       console.log(totalCost);

        alert('Your total cost today is: ' + totalCost + ' dollars');



//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    var googleRate = 400, amazonRate = 380, facebookRate = 350;

    var googleTime = 6, amazonTime = 4, facebookTime = 10;

    var weeklyEarnings = (googleRate * googleTime) + (amazonRate * amazonTime) + (facebookRate * facebookTime);
        console.log('Your weekly earnings this week is: $' + weeklyEarnings);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

    var  classNotFull = true, noConflicts = true;

    if (classNotFull && noConflicts){
        console.log('Perfect! You are welcome to enroll in this class.')
    } else{
        console.log('I\'m sorry, but you cannot enroll at this time.')
    };

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
    var buyMoreThan2 = true, notExpired = true, premiumMember = true;

    if (buyMoreThan2 && notExpired || premiumMember && notExpired) {
        console.log('We\'ve applied the product offer to your purchase')

    } else {
        console.log('We\'re sorry but we are unable to apply the product offer at this time.')

    };