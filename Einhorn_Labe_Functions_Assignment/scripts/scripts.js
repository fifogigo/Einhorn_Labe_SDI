/**
 * Created by Labe Einhorn on 5/27/2015.
 * Functions Assignment.
 */

// Function to get input
function getUserInput(inputMessage){ // function declaration
    var result = Number(prompt(inputMessage)); // initial prompt for information
    while(!(result > 0)){ // test for loop, if result is not a number above zero, reprompt
        result = Number(prompt("Sorry, the entered value was not a number\n" + inputMessage)); // reprompt here
    }
    console.log("Result of input is $" + result); // output for testing validity
    return result; // return value to main document
}

// Function to calculate new minimum balance based off of current balance, amount paid, and apr
// not sure how to do this calculation so i'm guessing until I can find what the actual calculation is
var calculateBalance = function(balance, payment, apr){ // function declaration
    return balance - payment + (apr/1200) * balance; //return balance based on calculation
};

// Function to display output
function displayOutput(bal, paid, apr, total){ // function declaration
    var msg1 = "The remaining balance from an initial balance of $" + bal + " with a payment of $" + paid + "\n"; // first part of output message
    var msg2 = "with an apr of " + apr + "% is $" + total.toFixed(2); // second part of output message
    alert(msg1 + msg2); // concat the two messages and display as alert
    console.log(msg1 + msg2); // concat the two messages and display in console
}

// Main document here

var currentBalance = Number(getUserInput("Please enter the current balance")); // get the balance for the calculation
var paymentAmount = Number(getUserInput("Please enter the amount paid")); // get the payment for the calculation
var currentApr = Number(getUserInput("Please enter the current apr")); // get the apr for the payment
var total = calculateBalance(currentBalance, paymentAmount, currentApr); // calculate new balance
console.log("Result of apr calculation is $" + total.toFixed(2)); // output for verification
displayOutput(currentBalance, paymentAmount, currentApr, total); // display the output as both an alert and a console message

/* test results
 Result of input is $1000
 Result of input is $100
 Result of input is $24.99
 Result of apr calculation is $920.83
 The remaining balance from an initial balance of $1000 with a payment of $100
 with an apr of 24.99% is $920.83

 Result of input is $920.83
 Result of input is $100
 Result of input is $24.99
 Result of apr calculation is $840.01
 The remaining balance from an initial balance of $920.83 with a payment of $100
 with an apr of 24.99% is $840.01

 Result of input is $840.01
 Result of input is $100
 Result of input is $24.99
 Result of apr calculation is $757.50
 The remaining balance from an initial balance of $840.01 with a payment of $100
 with an apr of 24.99% is $757.50
 */