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
var calculateBalance = function(){

}

// Function to display output
function displayOutput(){

}

// Main document here

var currentBalance = Number(getUserInput("Please enter the current balance"));
console.log("Returned value is: " + currentBalance);