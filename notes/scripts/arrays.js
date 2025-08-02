let fruits = ["apple", "banana", "orange"]; //string
let numbers = [10, 2, 3, 5]; //integers
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

// changing existing values from an array 
fruits[1] = "strawberry";
console.log(fruits);

numbers[0] = "This is not a number";
console.log(numbers);

emptyArray[0] = true;
console.log(emptyArray);

//Add elements at the end of an array
let fruits2 = ["lemmon","lime"];
fruits.push(fruits2);
console.log(fruits);
console.log(fruits[3][1]);

//Removing elements from the end
fruits.pop();
console.log(fruits);


let movies = ["Iron Man 1", "Iron Man 2", "Iron Man 3", "Shrek 1", "Shrek 2"];

console.log("All movies: ", movies);

// Print first element
console.log("First Element: ", movies[0]);

// Print last element
// The length property is always going to return the highest index + 1.
// By knowing this, we could retrieve the last element by subtracting one 'movies.length - 1'
console.log("Last Element: ", movies[movies.length - 1]);

// Adding two movies
movies.push("Avengers 1");
movies.push("Avengers 2");
console.log("Adding two more movies: ", movies);

// Remove the last movie and print the updated array
movies.pop();
console.log(movies);

// Extra challenge
movies[2] = "Dr. Strange";
console.log("Modifying values: ", movies);

// add elements at the beginning of the array
fruits.unshift("banana");
console.log("adding at the beginning: ", fruits);

// removing elements from the beginning of an array
fruits.shift();
console.log("removing the first element: ", fruits);

// removing elements from a specific position
fruits.splice(1,2);
console.log("removing from specific index: ", fruits)

// the first element would be the beginning where we want to delete
// the second element would be the number of elements to delete 
console.log("removing from specific index: ", fruits);

let number = [10,20,30,40,50];
let totalSum = 0;
for (let i=0;i<number.length;i++){
    totalSum += number[i]
}

console.log("the total sum is", totalSum);
console.log("the average is", totalSum/number.length);