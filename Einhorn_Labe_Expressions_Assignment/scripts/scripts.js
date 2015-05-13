/**
 * Created by fifogigo on 5/12/2015.
 */


// First idea, lets see if we can get all the points while calculating a vector.....something
// Ok, going to add a vector, increment the vector, and readd the vector
var arrayElement1 = prompt("Please enter the X value for the first vector:"); // this is to get the first array element
var arrayElement2 = prompt("Please enter the Y value for the first vector:"); // this is to get the second array element
var arrayElement3 = prompt("Please enter the X value for the second vector:"); // this is to get the third array element
var arrayElement4 = prompt("Please enter the Y value for the second vector:"); // this is to get the fourth array element

var array1 = [arrayElement1, arrayElement2];
var array2 = [arrayElement3, arrayElement4];

vectorAdd1 =  [array1[0]+array2[0], array1[1]+array2[1]];





console.log(vectorAdd1);