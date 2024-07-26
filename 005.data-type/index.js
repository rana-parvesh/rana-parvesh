//lets gets the data type

// 01. number data type
let age = 25;
let temperature = 98.6;

//Example
let x = 10;
let y = 3.14;
console.log(x); // Outputs: 10
console.log(y); // Outputs: 3.14

// 02. string data type
let name = "Rana";
let greeting = "Hello, world!";

//Example
let hello = "Hello, world!";
let name2 = "John Doe";
console.log(hello); // Outputs: Hello, world!
console.log(name); // Outputs: John Doe

// 03. boolean data type
let isStudent = true;
let hasGraduated = false;

//Example
let isJavaScriptFun = true;
let isSkyGreen = false;
console.log(isJavaScriptFun); // Outputs: true
console.log(isSkyGreen); // Outputs: false

// 04. null
let car = null;

//Example
let emptyValue = null;
console.log(emptyValue); // Outputs: null

// 05. undefineed
let unassignedVariable;
console.log(unassignedVariable); // Outputs: undefined

//Example
let middleName;
console.log(middleName); // Outputs: undefined

// 06.1. objects {}
// object alwayes start at {}

let person = {
  firstName: "Rana",
  lastName: "Smith",
  age: 25,
};

console.log(person.firstName); // Outputs: rana

// 06.3 arrrey []
let colors = ["red", "green", "blue"];

//Example
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs: apple

// function
function greet(name) {
  return `Hello, ${name}!`;
}

//Example
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Rana")); // Outputs: Hello, Rana!

// 06.4 data
let now = new Date();

//Example
let currentDate = new Date();
console.log(currentDate); // Outputs the current date and time
