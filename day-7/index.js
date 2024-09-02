/*
- Day 7: Arrays
  - Array declaration, accessing elements
  - Array methods (push, pop, shift, unshift, map, filter, etc.)
*/
// 1.2 Accessing arrey elements
var hobby = ["eating", " playing", "travelling", "fishing"];
console.log(hobby);

// 1.3 Modifying Array Elements
// fruits[1] = "orange"; // ["apple", "orange", "mango"]

// 1.4 Array Length
// let numberOfFruits = fruits.length; // 3

// 2. Array Methods: Intermediate Concepts

/*2.1 Adding and Removing Elements
push(): Adds one or more elements to the end of an array*/
// push()
var results = [75, 86, 43, 52, 74, 96];
results.push(56);
console.log(results);

// pop()
var results = [75, 86, 43, 52, 74, 96];
results.pop();
console.log(results);

// unshift()
{
  const friends = ["rana", "shoron", "hasi", "raihan"];
  friends.unshift("muna");
  console.log(friends);

  // shift()
  friends.shift();
  console.log(friends);
}

/*
2.2 Finding and Manipulating Elements
indexOf(): Returns the index of the first occurrence of a value,
 or -1 if it is not present.*/

// indexOf()
{
  const friends = ["rana", "shoron", "hasi", "raihan"];
  const sl = friends.indexOf("hasi");
  console.log(sl);

  // fruit.reverse()
  friends.reverse();
  console.log(friends);
}

/*
3. Advanced Array Methods
3.1 Transforming Arrays
map(): Creates a new array by applying a function to each element
 of the original array.*/

// let lengths = fruits.map((fruit) => fruit.length); // [5, 6, 5]
{
  const fruits = ["banana", "apple", "grape", "jackfruits"];
  const length = fruits.map((f) => f.length);
  console.log(length);
}

// let longFruits = fruits.filter((fruit) => fruit.length > 5); // ["orange"]
{
  const fruits = ["banana", "apple", "grape", "jackfruits"];
  const distance = fruits.filter((f) => f.length <= 5);
  console.log(distance);
}

// let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // 16
{
  const fruits = ["banana", "apple", "grape", "jackfruits"];
  const reuse = fruits.reduce((total, fruit) => total + fruit.length, 0);
  console.log(reuse);

  //another
  var number = [1, 2, 3, 4];
  var result = number.reduce((pv, sv) => pv + sv);
  console.log(result);
}
// 3.2 Sorting Arrays
// fruits.sort(); // ["apple", "mango", "orange"]
{
  let numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  // another
  const results = [72, 73, 45, 32, 96, 12];
  results.sort((x, y) => x - y);
  console.log(results);
}
/*
4. ES6 Array Methods
4.1 find() and findIndex()
find(): Returns the value of the first element that satisfies the
provided testing function.*/
{
  let fruits = ["banana", "apple", "mango", "grape"];
  let mango = fruits.find((f) => f === "mango");
  console.log(mango);

  // another
  const number = [27, 21, 75, 96, 45];
  let result = number.find((rec) => rec <= 25);
  console.log(result);
}
// let mangoIndex = fruits.findIndex((fruit) => fruit === "mango"); // 2
{
  let fruits = ["banana", "apple", "mango", "grape"];
  let mango = fruits.findIndex((f) => f === "mango");
  console.log(mango);
}
// let str = "hello";
// let letters = Array.from(str); // ["h", "e", "l", "l", "o"]
{
  const name = "rana parvesh";
  const distracture = Array.from(name);
  console.log(distracture);
}

// let arrayOfFruits = Array.of("apple", "banana", "mango"); // ["apple", "banana", "mango"]
{
  const name = Array.of("rana parvesh", "shoron", "hasi");
  console.log(name);
}
// fill()
{
  let numbers = [1, 2, 3, 4, 5];
  numbers.fill(0, 2, 4);
  console.log(numbers);
}

/*
4.5 copyWithin()
Copies part of an array to another location in the
 same array without modifying its length.*/
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // [4, 5, 3, 4, 5]

/*4.6 entries(), keys(), values()
These methods return a new Array Iterator object
that contains the keys, values, or key/value pairs for each index in the array*/

//Arrey iterator
{
  const fruits = ["apple", "banana", "grape", "jackfruits"];
  for (let x of fruits) {
    console.log(x);
  }
}
// // 5. Multidimensional Arrays
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let middle = matrix[1][1]; // 5

// /*5.2 Flattening Arrays
// flat(): Flattens nested arrays into a single array.*/

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(); // [1, 2, 3, 4, [5, 6]]

{
  const arr = [
    "rana",
    ["hashi", "phota", "rahim"],
    ["shoron", [1, 2, 3], "babar"],
  ];
  const flatArray = arr.flat();
  console.log(flatArray);
}

// // 6. Destructuring Arrays
// let [first, second] = fruits; // first = "apple", second = "mango"

// 6.2 Swapping Variables
let a = 1,
  b = 2;
[a, b] = [b, a]; // a = 2, b = 1

{
  const person = {
    name: "Rana Parvesh",
    address: " bochagonj",
    contact: "01797988791",
    hobby: {
      play: "cricket",
      works: "web-deveolepment",
      eating: "rice",
    },
  };
  const {
    hobby: { works: x },
  } = person;
  console.log(x);
}

// 7. Combining Arrays
// 7.1 concat()
// let moreFruits = ["kiwi", "pineapple"];
// let combined = fruits.concat(moreFruits); // ["apple", "mango", "orange", "kiwi", "pineapple"]

{
  const teamA = ["rana", "hashi", "muna"];
  const teamB = ["shoron", "raihan", "phota"];
  const team = teamA.concat(teamB);
  console.log(team);
}
// // 7.2 spread operator (...)
// let expandedFruits = ["strawberry", ...fruits]; // ["strawberry", "apple", "mango", "orange"]
{
  const teamA = ["rana", "hashi", "muna"];
  const teamB = ["shoron", "raihan", "phota"];
  const team = [teamA, ...teamB];
  console.log(team);
}

// //  slice()
{
  const friends = ["rana", "hashi", "muna", "shoron", "raihan", "phota"];
  const leave = friends.slice(2, 4);
  console.log(leave);
}

// // splice()
{
  const friends = ["rana", "hashi", "muna", "shoron", "raihan", "phota"];
  const newFriends = friends.splice(2, 4, "tani", "hasin");
  console.log(newFriends);
}
