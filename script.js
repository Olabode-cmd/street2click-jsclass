// Javascript Intro

// Variables
// Data types

// HTML is the building block on which most websites are made.
// CSS is used to style HTML elements.
// JavaScript is used to add interactivity and dynamic behavior to web pages.

// A variable is a named storage location for data. In other words, a name you assign to 
// a piece of data or value that you want to use later in your code.

// In older versions of JavaScript, variables were declared using the `var` keyword.
var name = "Peter"
console.log(name)

// In modern JavaScript, we use `let` and `const` to declare variables.
let firstName = "John"
console.log(firstName)
firstName = "Jane"
console.log(firstName)

const secondName = "Doe"
console.log(secondName)

console.log("Hello, " + firstName + " " + secondName)
// secondName = "Smith" // This will throw an error because `const` variables cannot be reassigned.

// Data types in JavaScript include:
// Data types are split into two. Primitive and Non-primitive data types.

// Primitive Data Types
// 1. String: A sequence of characters, enclosed in single or double quotes.

// 2. Number: This data type consists of numeric values
let age = 14
let count = 17

console.log(age + count)

let pi = 31
let pie = "31"

console.log(pi + pie)

// 3. Boolean: Booleans can only have two values: true or false.
let isMarried = true
console.log(isMarried)

// 4. Undefined: A variable that has been declared but not assigned a value is undefined.
// let student

// 5. Null: A variable that has been explicitly assigned a null value.
let emptyValue = null

// Non-primitive Data Types
// 1. Object: An object is a collection of data that are in key-value pairs.
const student = {
    name: "John Doe", // key: value
    age: 18,
    class: "JSS3",
    dept: "Science",
    isMarried: false
}

console.log(student)

// 2. Arrays: An array is a collection of values
let fruits = ["Apple", "Banana", "Cherry", "Date"]
console.log(fruits)

// 3. Functions
// A function is a block of code designed to perform a particular task.

function greet() {
    console.log("Hello everybody!!!")
}

greet();

function greetSomebody(name) {
    console.log("Hello " + name + "!!!")
}

greetSomebody("John");
greetSomebody("Jane");

// Simple classwork

// Make a function. Declare two number variables inside and console log their sum.
// Make the function run by calling it.

function addNumbers() {
    let number1 = 12;
    let number2 = 19;
    console.log(number1 + number2)
}

addNumbers();

// Arguments in Functions
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(12, 19);
addTwoNumbers(5, 10);
addTwoNumbers(100, 200); 

// Classwork

// Create a function that takes four numbers as arguments. You multiply the first two. Multiply the last two.
// And then add the products together.