let fruits = ("apple, banna, orange"); //string
let numbers = (10, 2, 3, 5); //integers
let emptyArray = []; // empty array

// Displaying an array 
console.log(fruits); //print all the array
console.log(fruits[1]); // by position
console.log(emptyArray);

// how to print the number 5 under the array of numbers
console.log(numbers[3]);

// let arrayName = [value1, value2, ...];

//Knowing the size of the array -> lenght
console.log("the lenght of the fruits array is:", fruits.length)

//travelling an array
let studentNames = ["zane", "reggie", "jake", "tim", "jose"];
/*console.log(studentNames[0]);
console.log(studentNames[1]);
console.log(studentNames[2]);
console.log(studentNames[3]);*/

//use a for loop to travel the array and print all the names
for (let i=0; i <studentNames.length; i++){
    //print the name in the browser console
    console.log(studentNames[i]);
}