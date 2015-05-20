/**
 * Created by fifogigo on 5/12/2015.
 */

// Working Idea, make a calculator that gets input, from user about watching a movie at a theater
var isChild;
var parentPresent;
var movieRating;
var movieName;

movieRating = prompt("Please enter the Movies Rating (G / PG / PG13 / R");// prompt to get movieRating
console.log(movieRating); // Output results to console

if(movieRating != "G" && movieRating != "PG" && movieRating != "PG13" && movieRating != "R"){ // If statement to see if any condition is true
    movieRating = prompt("Wrong value selected, please enter a valid rating")
}

isChild = prompt("Please enter if this ticket is for a Child or Adult");// prompt to get isChild
console.log(isChild); // Output results to console


