/**
 * Created by Labe Einhorn on 5/13/2015.
 * Expression Assignment.
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

console.log(arrayOutput1 + arrayOutput2); // combine both lines of the output into an alert

// This would be more efficient in a loop, but haven't gotten that far in this class (though i'm pretty sure it's not much different from other languages
array1[0]++; // incrementing value in array1[0]
array1[1]++; // incrementing value in array1[1]
array2[0]++; // incrementing value in array2[0]
array2[1]++; // incrementing value in array2[1]

vectorAdd1 =  [array1[0]+array2[0], array1[1]+array2[1]]; // calculate vector addition here
var arrayOutput1 = ("Adding (" + array1[0] + "," + array1[1] + ") + (" + array2[0] + "," + array2[1] + ")"); // this is the first part of the output
var arrayOutput2 = ("\nGives you (" + vectorAdd1[0] + "," + vectorAdd1[1] + ")"); // second line of the output here

console.log(arrayOutput1 + arrayOutput2); // combine both lines of the output into an alert


/*
Test output run one:
 Adding (8,13) + (26,7)
 Gives you (34,20)

 Adding (9,14) + (27,8)
 Gives you (36,22)

Test output run two:
 Adding (9,45) + (65,12)
 Gives you (74,57)

 Adding (10,46) + (66,13)
 Gives you (76,59)

Test output run three:
 Adding (98,2) + (78,23)
 Gives you (176,25)

 Adding (99,3) + (79,24)
 Gives you (178,27)

 */