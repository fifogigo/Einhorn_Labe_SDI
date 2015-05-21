/**
 * Created by Labe Einhorn on 5/21/2015.
 * Conditionals assignment.
 */

// Working Idea, make a calculator that gets input, from user about watching a movie at a theater

var childTickets; // variable for children's tickets
var adultTickets; // variable for adults tickets
var movieName; // variable for movie name
var price = 0; // sum will be here
var childTicketPrice = 10.50; // using local theaters price
var adultTicketPrice = 14.00; // using local theaters price
var childrenAsAdults; // will be used to check if children are coming in as adults
var numberOfChildrenAsAdults; // number of children to increase/decrease appropriate variables

childTickets = Number(prompt("Please enter number of children's tickets")); // get input
console.log("Number of child tickets: " + childTickets); // check for numeric value
if(childTickets === ""){ // if null value
    childTickets = Number(prompt("Invalid number, Please enter number of children's tickets")); // get input
}

adultTickets = Number(prompt("Please enter number of adult's tickets")); // get input
console.log("number of adult tickets: " + adultTickets); // check for numeric value
if(adultTickets === ""){ // if null value
    adultTickets = Number(prompt("Invalid number, Please enter number of adult's tickets")); // get input
}

childrenAsAdults = prompt("Are any children coming in as adults? (Y/N)"); // get input
console.log("Children coming in as adults: " + childrenAsAdults); // check for numeric value
if(childrenAsAdults === "Y" || childrenAsAdults === "y"){ // if user responded "Y" or "y"
    numberOfChildrenAsAdults = Number(prompt("Please enter number of children coming in as adults")); // get input
    if(numberOfChildrenAsAdults > childTickets){ // if number of children coming in as adults is higher than number of children
        numberOfChildrenAsAdults = Number(prompt("The number was invalid, please try again:")); // get input
    } else { //otherwise
        childTickets -= numberOfChildrenAsAdults; // decrease number of children from calculation
        adultTickets += numberOfChildrenAsAdults; // increase number of adults
        console.log("Number of children coming in as adults " + numberOfChildrenAsAdults); // output to console for results of test
    }
} else if(childrenAsAdults === "N" || childrenAsAdults === "n") { // if response is "N" or "n"
    console.log("No children are coming in as adults") // console output for failed condition
} else { // otherwise
    childrenAsAdults = prompt("That was an invalid response, please try again"); //reprompt for information without, a loop this can fail
}

movieName = (childTickets === 0) ? "Mad Max: Fury Road" : "Avengers: Age of Ultron (2015)"; // Ternary operator ftw
console.log(movieName); // Verification that Ternary was setup correctly

if (childTickets === 0 && adultTickets === 0) { //if no child or adult tickets are being purchased
    alert("No tickets are being purchased"); // alert the user of such
    console.log("No tickets are being purchased"); // log the same thing
} else { // otherwise
    price = adultTickets * adultTicketPrice + childTickets * childTicketPrice; // calculate price
    alert(childTickets + " Children and " + adultTickets + " Adults are watching " + movieName + " for a total cost of $" + price.toFixed(2)); // output alert with formating
    console.log(childTickets + " Children and " + adultTickets + " Adults are watching " + movieName + " for a total cost of $" + price.toFixed(2)); //output to console with formatting
}

/*
 Number of child tickets: 1
 number of adult tickets: 1
 Children coming in as adults: y
 Number of children coming in as adults 1
 Mad Max: Fury Road
 0 Children and 2 Adults are watching Mad Max: Fury Road for a total cost of $28.00


 Number of child tickets: 1
 number of adult tickets: 1
 Children coming in as adults: n
 No children are coming in as adults
 Avengers: Age of Ultron (2015)
 1 Children and 1 Adults are watching Avengers: Age of Ultron (2015) for a total cost of $24.50


 Number of child tickets: 4
 number of adult tickets: 4
 Children coming in as adults: y
 Number of children coming in as adults 3
 Avengers: Age of Ultron (2015)
 1 Children and 7 Adults are watching Avengers: Age of Ultron (2015) for a total cost of $108.50
 */