// Javascript Recap
// Variables

// A variable is a named storage location for data. In other words, a name you assign to 
// a piece of data or value that you want to use later in your code.

// var - 
// var name = "Johnson";
// console.log(name)
// console.log("My name is " + name)

// newer versions of javascript
// let and const
let firstName = "Johnson"
console.log("My name is " + firstName)
firstName = "John"

const secondName = "Favour"
console.log("My name is " + firstName + " " + secondName);

// Naming Convention

// let name;
// let packagename; //camelCase
// let packAge;

// let school = "Yemi Intl School"
let schoolName = "blah blah blkahb"
let packAge = "17 years of age"

// Data types
// There are two kinds of data types - primitive and non-primitive

// Primitive

// 1. String: A sequence of characters, enclosed in single or double quotes.
let dfiClass = "Javascript's class"

// 2. Number: This data type consists of numeric values
let money = 1000
// let age = 17

// console.log(money + age)
let secondAge = "17"

// 3. Boolean: Booleans can only have two values: true or false.
let doIKnowEnough = false;
let doYouKnowJavascript = true;


// 4. Undefined: A variable that has been declared but not assigned a value is undefined.
// let student;

// 5. Null: A variable that has been explicitly assigned a null value.
let pupil = null;

// Non-primitive
// 6. Object: An object is a collection of data that are in key-value pairs.
const student = {
    name: "John Doe", // key: value
    age: 20,
    isPupilOldEnough: true,
    class: "JSS3",
    dept: "Science",
    isMarried: false,

}
 
console.log(student)

// 7. Arrays: An array is a collection of values separated by a comma
let fruits = ["Apple", "Banana", "Cherry", "Date"]
console.log(fruits)

// 8. Functions
// A function is a reusable piece of code made to perform a specific task.

function greetEverybody() { // curly braces
    console.log("Hello everyone. Good morning.")
}

greetEverybody(); 

// Functions with Arguments
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(6, 19)
addTwoNumbers(82, 123)

// Classwork
// write a function that takes in 4 numbers as arguments
// add the first 2
// add the last 2
// multiply the sums and console the product.

function addNumbers(num1, num2, num3, num4) {
    const firstSum = num1 + num2;
    const secondSum = num3 + num4;
    console.log("The product of the first two numbers and the last two is " + firstSum * secondSum)
}

addNumbers(2, 3, 7, 3)

// Classwork
// Write a function that takes 3 subjects as arguments
// Print all three subjects in a single line
// e.g Today, I studied Mathematics, Science and Art.

function printSubjects(subject1, subject2, subject3) {
    console.log("Today, I studied " + subject1 + ", " + subject2 + ", and " + subject3)
}

printSubjects("Mathematics", "Basic Science", "Economics");

// Conditionals
// Conditionals are logic flows that execute code based on certain conditions.

// If statements
let canYouSendAConsole = false;

if (canYouSendAConsole == true) {
    console.log("I can send a console.")
}

let age = 17

if (age < 18) {
    console.log("You are not yet an adult")
} else if (age == 18 ) {
    console.log("You are 18 now")
} else if (age > 18) {
    console.log("You are an adult")
} else {
    console.log("I don't know your age")
}

// classwork
// create a temperature variable
// if it is less than 20, console this place is very cold


let temperature = 21;

if (temperature < 20) {
    console.log("This place is very cold")
} else {
    console.log("This place is decent")
}


// Classwork
// Write a function that takes in two numbers and consoles the larger one.
function compareNumbers(num1, num2) {
    if (num1 < num2) {
        console.log("The larger number is " + num2)
    } else if (num1 > num2) {
        console.log("The larger number is " + num1)
    } else {
        console.log("Numbers are either invalid or the same.")
    }
}

compareNumbers(4, 9)

// Classwork
// Write a function that takes in a number as an argument and tells us if
// it is an even or odd number

// %

function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(num + " is an even number")
    } else if (num % 2 == 1) {
        console.log(num + " is an odd number")
    } else {
        console.log("Not a valid number")
    }
}

evenOrOdd(6)

// Assignment
// Write a function that takes in a number as an argument and tells us if
// it is a prime number or not.