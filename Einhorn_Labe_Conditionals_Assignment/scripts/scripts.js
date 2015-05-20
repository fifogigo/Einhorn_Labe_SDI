/**
 * Created by fifogigo on 5/12/2015.
 */

// Working Idea, make a calculator that gets input, from user about watching a movie at a theater

var childTickets; // variable for children's tickets
var adultTickets; // variable for adults tickets
var movieName; // variable for movie name
var price = 0; // sum will be here
var childTicketPrice = 10.50; // using local theaters price
var adultTicketPrice = 14.00; // using local theaters price
var childrenAsAdults;
var numberOfChildrenAsAdults;

childTickets = Number(prompt("Please enter number of children's tickets")); // get input
console.log("Number of child tickets: " + childTickets); // check for numeric value
if(childTickets === ""){
    childTickets = Number(prompt("Invalid number, Please enter number of children's tickets")); // get input
}

adultTickets = Number(prompt("Please enter number of adult's tickets")); // get input
console.log("number of adult tickets: " + adultTickets); // check for numeric value
if(adultTickets === ""){
    adultTickets = Number(prompt("Invalid number, Please enter number of adult's tickets")); // get input
}

childrenAsAdults = prompt("Are any children coming in as adults? (Y/N)"); // get input
console.log("Children coming in as adults: " + childrenAsAdults); // check for numeric value
if(childrenAsAdults === "Y" || childrenAsAdults === "y"){
    numberOfChildrenAsAdults = Number(prompt("Please enter number of children coming in as adults")); // get input
    if(numberOfChildrenAsAdults > childTickets){
        numberOfChildrenAsAdults = Number(prompt("The number was invalid, please try again:")); // get input
    } else {
        childTickets -= numberOfChildrenAsAdults;
        adultTickets += numberOfChildrenAsAdults;
    }
} else if(childrenAsAdults === "N" || childrenAsAdults === "n") {
    console.log("No children are coming in as adults")
} else {
    childrenAsAdults = prompt("That was an invalid response, please try again");
}

movieName = (childTickets === 0) ? "Mad Max: Fury Road" : "Avengers: Age of Ultron (2015)"; // Ternary operator ftw
console.log(movieName); // Verification that Ternary was setup correctly

if (childTickets === 0 && adultTickets === 0) {
    alert("No tickets are being purchased");
    console.log("No tickets are being purchased");
} else {
    price = adultTickets * adultTicketPrice + childTickets * childTicketPrice;
    alert(childTickets + " Children and " + adultTickets + " Adults are watching " + movieName + " for a total cost of $" + price.toFixed(2));
    console.log(childTickets + " Children and " + adultTickets + " Adults are watching " + movieName + " for a total cost of $" + price.toFixed(2));
}