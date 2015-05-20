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

childTickets = Number(prompt("Please enter number of children's tickets")); // get input
console.log(childTickets); // check for numeric value
if(childTickets == ""){
    childTickets = Number(prompt("Invalid number, Please enter number of children's tickets")); // get input
}

adultTickets = Number(prompt("Please enter number of adult's tickets")); // get input
console.log(adultTickets); // check for numeric value
if(adultTickets == ""){
    adultTickets = Number(prompt("Invalid number, Please enter number of adult's tickets")); // get input
}

movieName = (childTickets === 0) ? "Mad Max: Fury Road" : "Avengers: Age of Ultron (2015)"; // Ternary operator ftw
console.log(movieName); // Verification that Ternary was setup correctly

if (childTickets === 0) {

} else if(adultTickets >= 0) {

}