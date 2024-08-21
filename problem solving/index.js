//day-> 6 function
//Problem 1: Sum of Two Numbers
/*
function sumOfTwo(a, b) {
  // Your code here

  return a + b;
}

console.log(sumOfTwo(5, 10)); // Output: 15
console.log(sumOfTwo(3, 7)); // Output: 10

// Problem 2: Greet with Default Name

function greet(name = "Guest") {
  // Your code here
  console.log("hellow " + name, "!");
}

greet(" Rana"); // Output: Hello, Rana!
greet(); // Output: Hello, Guest!

//Problem 3: Find Maximum
function findMax(a, b, c) {
  // Your code here
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
console.log(findMax(5, 10, 3)); // Output: 10
console.log(findMax(1, 20, 15)); // Output: 20

// Problem 4: Arrow Function for Array Sum
const sumArray = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([10, 20, 30])); // Output: 60

//Problem 5: Factorial Function
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
*/
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
