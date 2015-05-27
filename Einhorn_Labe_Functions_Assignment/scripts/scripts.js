/**
 * Created by Labe Einhorn on 5/27/2015.
 * Functions Assignment.
 */

// Function to get input
function getUserInput(inputMessage){
    var result = Number(prompt(inputMessage));
    while(!(result > 0)){
        result = Number(prompt("Sorry, the entered value was not a number\n" + inputMessage));
    }
    console.log("Result of input is $" + result)
    return result;
}

// Function to calculate new minimum balance based off of current balance, amount paid, and apr
// not sure how to do this calculation so i'm guessing until I can find what the actual calculation is
var calculateBalance = function(balance, payment, apr){
    console.log("passed in values " + balance, payment, apr);
    return balance - payment + (apr/1200) * balance;
};

// Function to display output
function displayOutput(bal, paid, apr, total){
    var msg1 = "The remaining balance from an initial balance of $" + bal + " with a payment of $" + paid + "\n";
    var msg2 = "with an apr of " + apr + "% is $" + total.toFixed(2);
    alert(msg1 + msg2);
    console.log(msg1 + msg2);
}

// Main document here

var currentBalance = Number(getUserInput("Please enter the current balance"));
var paymentAmount = Number(getUserInput("Please enter the amount paid"));
var currentApr = Number(getUserInput("Please enter the current apr"));
var total = calculateBalance(currentBalance, paymentAmount, currentApr);
console.log("Result of apr calculation is $" + total.toFixed(2));
displayOutput(currentBalance, paymentAmount, currentApr, total);