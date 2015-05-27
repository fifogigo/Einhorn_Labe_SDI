/**
 * Created by Labe Einhorn on 5/27/2015.
 * Functions Assignment.
 */

// Function to get input
function getUserInput(inputMessage){
    var result = Number(prompt(inputMessage));
    console.log("Initial entered value is " + result);
    while(!(result > 0)){
        result = Number(prompt("Sorry, the entered value was not a number\n" + inputMessage));
        console.log("reprompted value is " + result);
    }
    return result;
}

// Function to calculate new minimum balance based off of current balance, amount paid, and apr
// not sure how to do this calculation so i'm guessing until I can find what the actual calculation is
var calculateBalance = function(balance, payment, apr){
    console.log("passed in values " + balance, payment, apr);
    return balance - payment + (apr/1200) * balance;
}

// Function to display output
function displayOutput(){

}

// Main document here

var currentBalance = Number(getUserInput("Please enter the current balance"));
console.log("Returned value is: " + currentBalance);
var paymentAmount = Number(getUserInput("Please enter the amount paid"));
console.log("Returned value is: " + paymentAmount);
var currentApr = Number(getUserInput("Please enter the current apr"));
console.log("Returned value is: " + currentApr);
var total = calculateBalance(currentBalance, paymentAmount, currentApr);
console.log("Remaining amount " + total);