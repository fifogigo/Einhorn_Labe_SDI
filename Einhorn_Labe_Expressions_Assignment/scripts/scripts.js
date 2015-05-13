/**
 * Created by fifogigo on 5/12/2015.
 */


// First idea, lets see if we can get all the points while calculating a vector.....something
// Ok, going to add a vector, increment the vector, and readd the vector
var arrayElement1 = prompt("Please enter the X value for the first vector:"); // this is to get the first array element
var arrayElement2 = prompt("Please enter the Y value for the first vector:"); // this is to get the second array element
var arrayElement3 = prompt("Please enter the X value for the second vector:"); // this is to get the third array element
var arrayElement4 = prompt("Please enter the Y value for the second vector:"); // this is to get the fourth array element

var array1 = [Number(arrayElement1), Number(arrayElement2)]; // setup first array
var array2 = [Number(arrayElement3), Number(arrayElement4)]; // setup second array

vectorAdd1 =  [array1[0]+array2[0], array1[1]+array2[1]]; // calculate vector addition here
var arrayOutput1 = ("Adding (" + array1[0] + "," + array1[1] + ") + (" + array2[0] + "," + array2[1] + ")"); // this is the first part of the output
var arrayOutput2 = ("\nGives you (" + vectorAdd1[0] + "," + vectorAdd1[1] + ")"); // second line of the output here

alert(arrayOutput1 + arrayOutput2); // combine both lines of the output into an alert

/*
vectorAdd1 =  [Number(array1[0])+Number(array2[0]), Number(array1[1])+Number(array2[1])]; // calculate vector addition here
var arrayOutput1 = ("Adding (" + array1[0] + "," + array1[1] + ") + (" + array2[0] + "," + array2[1] + ")"); // this is the first part of the output
var arrayOutput2 = ("\nGives you (" + vectorAdd1[0] + "," + vectorAdd1[1] + ")"); // second line of the output here

alert(arrayOutput1 + arrayOutput2); // combine both lines of the output into an alert


console.log(vectorAdd1);
console.log(array1);
*/