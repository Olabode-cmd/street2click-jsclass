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
// let firstName = "Johnson"
// console.log("My name is " + firstName)
// firstName = "John"

// const secondName = "Favour"
// console.log("My name is " + firstName + " " + secondName);

// Naming Convention

// let name;
// let packagename; //camelCase
// let packAge;

// let school = "Yemi Intl School"
// let schoolName = "blah blah blkahb"
// let packAge = "17 years of age"

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
// let fruits = ["Apple", "Banana", "Cherry", "Date"]
// console.log(fruits)

// 8. Functions
// A function is a reusable piece of code made to perform a specific task.

// function greetEverybody() { // curly braces
//     console.log("Hello everyone. Good morning.")
// }

// greetEverybody(); 

// Functions with Arguments
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(6, 19)
// addTwoNumbers(82, 123)

// Classwork
// write a function that takes in 4 numbers as arguments
// add the first 2
// add the last 2
// multiply the sums and console the product.

// function addNumbers(num1, num2, num3, num4) {
//     const firstSum = num1 + num2;
//     const secondSum = num3 + num4;
//     console.log("The product of the first two numbers and the last two is " + firstSum * secondSum)
// }

// addNumbers(2, 3, 7, 3)

// Classwork
// Write a function that takes 3 subjects as arguments
// Print all three subjects in a single line
// e.g Today, I studied Mathematics, Science and Art.

// function printSubjects(subject1, subject2, subject3) {
//     console.log("Today, I studied " + subject1 + ", " + subject2 + ", and " + subject3)
// }

// printSubjects("Mathematics", "Basic Science", "Economics");

// Conditionals
// Conditionals are logic flows that execute code based on certain conditions.

// If statements
// let canYouSendAConsole = false;

// if (canYouSendAConsole == true) {
//     console.log("I can send a console.")
// }

// let age = 17

// if (age < 18) {
//     console.log("You are not yet an adult")
// } else if (age == 18 ) {
//     console.log("You are 18 now")
// } else if (age > 18) {
//     console.log("You are an adult")
// } else {
//     console.log("I don't know your age")
// }

// classwork
// create a temperature variable
// if it is less than 20, console this place is very cold


// let temperature = 21;

// if (temperature < 20) {
//     console.log("This place is very cold")
// } else {
//     console.log("This place is decent")
// }


// Classwork
// Write a function that takes in two numbers and consoles the larger one.
// function compareNumbers(num1, num2) {
//     if (num1 < num2) {
//         console.log("The larger number is " + num2)
//     } else if (num1 > num2) {
//         console.log("The larger number is " + num1)
//     } else {
//         console.log("Numbers are either invalid or the same.")
//     }
// }

// compareNumbers(4, 9)

// Classwork
// Write a function that takes in a number as an argument and tells us if
// it is an even or odd number

// %

// function evenOrOdd(num) {
//     if (num % 2 == 0) {
//         console.log(num + " is an even number")
//     } else if (num % 2 == 1) {
//         console.log(num + " is an odd number")
//     } else {
//         console.log("Not a valid number")
//     }
// }

// evenOrOdd(6)

// Assignment
// Write a function that takes in a number as an argument and tells us if
// it is a prime number or not.


// Research TailwindCSS media queries

// Event Listeners
// 

// const box = document.querySelector('.box')
// const button = document.getElementById('btn')

// function changeColorToRed() {
//     box.classList.add('red')
// }

// button.addEventListener('click', changeColorToRed);



// LOOPS
// A loop is an iterable program that runs the same
// block of code until a condition is satisfied.

// Think of it as a function that auto runs and
// only stops when a condition is satisfied

// TYPES OF LOOPS

// 1. FOR LOOP
// 2. WHILE LOOP
// 3. DO-WHILE LOOP

// 1. FOR LOOP
// for (let i=0; i<20; i++) {
//     console.log(i)
// }

// When using loops, you must be very careful 
// about the conditions and structure to prevent
// what we call an infinite loop

// 2. WHILE LOOP

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// 3. DO-WHILE LOOP
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i<20)

// SWITCH STATEMENTS
// A switch statement is used for multiple conditions

// let day = 2;

// switch(day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
    
//     case 2:
//         console.log("Today is Tuesday");
//         break;

//     case 3:
//         console.log("Today is Wednesday");
//         break;
    
//     default:
//         console.log("Invalid day.")
// }

// Arrow Functions
// This is another, more concise way to write javascript functions.

// Take this function for example
// function callName(name) {
//     console.log(`Hello ${name}`)
// }

// This is how you write it using arrow functions
// const callName = (name) => console.log(`Hello ${name}`)

// It usually is like this () => with the bracket representing
// those in front of the function name. They can also take in
// arguments.

// Don't forget to add the arrow sign => .
// Another example

// function greet() {
//     console.log("Hello everyone")
// }

// With arrow functions, it becomes
// const greet = () => console.log("Hello everyone")


// Array Methods
// A method is an inbuilt function that is associated with an object.

// Array methods
// push(): adds an element to the end of the array
// pop(): removes the last element
// shift(): removes the first element
// unshift(): adds an element to the start of the array
// map(): applying a function to each element in an array
// filter(): creates a new array by  applying a filter
// length: tells you how many elements are in an array

// and so many more...

// const fruits = ["apple", "banana", "pineapple", "orange"]
// console.log(fruits);
// fruits.push("Grape")
// console.log(fruits);
// fruits.pop()
// console.log(fruits);

// fruits.shift()
// console.log(fruits);
// fruits.unshift("Cashew")
// console.log(fruits);

// fruits.map((fruit, index) => {
//     console.log(`${fruit} is in position ${index + 1}`)
// })

// const numbers = [1, 2, 3, 4, 5]
// numbers.map((num) => {
//     console.log(`${num} times ${num} is ${num * num}`)
// }) 

// Create an array of objects for students.
// example

const students = [
    {
        name: "John Doe",
        class: "JSS2",
        subject: "Mathematics"
    },
    {
        // continue. make about 5 more
    }
]

// ma p through the array so for each, you can print
// Hello. My name is {student name}. I am in so-so class and my fa
// -vorite subject is so-so subject


// console.log

// function addNumbers(num1, num2) {
//     const sum = num1 + num2;
//     alert(`The sum of ${num1} and ${num2} is ${sum}.`)
// }

// addNumbers(10, 16)

// let name = prompt("What is your name?")
// alert(`Welcome ${name}`)

// CLASSWORK:

// 1. Research how Math.random() and Math.floor() works.
// 2. Make a number guessing game. This is how it works.

// Use Math.random to pick a number between 1 and 20
// Then ask the user to guess that number. They have 3 trials.
// If they guess too high, alert "The number you guessed is too high"
// If they guess too low, alert "The number is too low"
// If they get the number, alert "You got it!"
// If they guessed three times and they still couldn't get it, 
// alert "Your trials are up. The number is so-and-so"

// SOLUTIONS

// Math.random generates a random number between 0.01 and 0.99

const random = Math.floor(Math.random() * 20) + 1
console.log(random)

let maxAttempts = 3;
let attempts = 1;

let hasGuessCorrectly = false;

while (attempts <= maxAttempts) {
    const guess = prompt(`I have a number between 1 and 20. Guess it. You have ${maxAttempts - attempts + 1} ${maxAttempts - attempts == 1? "attempt" : "attempts"} left.`);

    if (guess == random) {
        alert("You got the number");
        hasGuessCorrectly = true;
        break;
    } else if (guess > random) {
        alert("Your guess is too high")
    } else if (guess < random) {
        alert("Your guess is too low.")
    } else {
        alert("Not a valid number. Try again")
    }

    attempts++
}

if (!hasGuessCorrectly) {
    alert(`You ran out of tries. The number is ${random}`)
}

// Ternary Operator
let name = "Olabode"
name == "Olabode" ? console.log("True"): console.log("False")