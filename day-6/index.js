/*
- Day 6: Functions
  - Function declaration, function expression
  - Arrow functions
  - Parameters এবং Return values
*/
/*
//01. syntax
function functionName(parameters) {
  // Code to be executed
}
functionName();

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Rana"); // Output: Hello, Rana!

//02. function expression

const myFunction = function (name) {
  console.log("hellow " + name + " !");
};
myFunction("rana");

//03 Arrow function

const graet = (name) => {
  console.log("hellow", name, " !");
};
greet("rana");

// const greet = (name) => console.log("Hello, " + name + "!");

// 4. Parameters and Return Values

function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log(sum);

//5. Advanced Concepts

// default parameter

function rana(name = "tani") {
  console.log(name);
}
rana();

// rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
var sum = (1, 2, 3, 4, 5);
console.log(sum); // Output: 10

// Arrow function and this property
const person = {
  name: "Rana",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

person.greet(); // Output: Hello, Rana
*/
// practice
