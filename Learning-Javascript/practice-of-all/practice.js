/*-function sleep(name, time) {
  console.log(name + "is sleeping at" + time);
}

sleep("rahim ", "9am");
sleep("karim ", "10am");
sleep("shoron ", "11am");

//task

var firstNumber = 20;
var secondNumber = 10;

var sum, sub, mul;
var div, rem;

sum = firstNumber + secondNumber;
console.log("20  +  10 =", sum);

sub = firstNumber - secondNumber;
console.log("20  -  10 =", sub);

mul = firstNumber * secondNumber;
console.log("20  *  10 =", mul);

div = firstNumber / secondNumber;
console.log("20  /  10 =", div);

rem = firstNumber % secondNumber;
console.log("20  %  10 =", rem);


var rana = "rana";
var shoron = " shoron";
var bro = rana + shoron;

console.log(bro + "  they are brother");*/
//
/*
var result = 45;
console.log(result);

if (80 <= result) console.log("the result is A+");
else if (70 <= result) console.log("the result is A");
else if (60 <= result) console.log("the result is A-");
else if (50 <= result) console.log("the result is B");
else if (40 <= result) console.log("the result is C");
else if (33 <= result) console.log("the result is D");
else if (0 <= result) console.log("the result is F");

//practice to the aray method

var a = 25;
var b = 25;
var c = a + b;
console.log("the value of sum c = ", c);

var a = 25;
var b = 25;
var c = a - b;
console.log("the value of sub c = ", c);

var a = 25;
var b = 25;
var c = a * b;
console.log("the value of multripple c = ", c);

var a = 25;
var b = 25;
var c = a / b;
console.log("the value of c divident = ", c);

// condition

var rana = 200;
var shorom = 200;
// var compare =

if (rana > shorom) {
  console.log("rana is hero");
} else if (rana < shorom) {
  console.log("shorom is hero");
} else {
  console.log("rana and shorom are   hero");
}

//turnary operator

var number = 0;

var result = 0 < number ? "positive" : 0 > number ? "negetive" : "zero";
console.log(result);

var rana = [25, 26, 27, 28, 29];
rana.pop();
rana.pop();
rana.pop();
rana.pop();
rana.pop();
rana.push(25, 45, 75);
rana.pop();
console.log(rana);

//
var num = [65, 56, 89, 76, 82];
var sum = 0;

for (var i = 0; i < 5; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}
console.log("the result is sum = " + sum);

//lets do the function

function sum(a, b) {
  var result = a + b;
  console.log(result);
}
sum(25, 26);

//

function topScorer(playersInfo) {
  var top = playersInfo[0][0];
  var tops = playersInfo[0][1];
  for (var i = 1; i < playersInfo.length; i++) {
    if (tops < playersInfo[i][1]) {
      tops = playersInfo[x][1];
      top = playersInfo[i][0];
    }
  }
  return topScorer;
}
var playersInfo = [
  ["rana", 99],
  ["shoron", 78],
  ["muna", 56],
  ["hasi", 89],
];
var name = topScorer(playersInfo);
console.log(name);

function SD(food, play, born, marks) {
  this.food = food;
  this.play = play;
  this.born = born;
  this.marks = marks;

  this.print = function () {
    console.log(this.food);
    console.log(this.play);
    console.log(this.born);
    console.log(this.marks);
  };
}
var SD1 = new SD(
  ["beef", "vegetable", "chicken"],
  "cricket",
  1999,
  [78, 56, 87, 36]
);
var SD2 = new SD(
  ["sweets", "lichi", "suger"],
  "chess",
  2000,
  [23, 45, 78, 96, 35]
);
SD1.print();
SD2.print();

function rana(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
  this.print = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.marks);
  };
}
var person1 = new rana("shoron", 23, [23, 25, 98, 45]);
var person2 = new rana("jimu", 24, [23, 55, 98, 45]);
var person3 = new rana("raihan", 25, [23, 25, 98, 45]);
var person4 = new rana("hena", 26, [33, 75, 98, 45]);

person1.print();
person2.print();
person3.print();*/

// today 06/07/2024
/*
var num1 = 450;
var num2 = 420;
var sum = num1 + num2;
console.log(sum);

var num1 = 450;
var num2 = 420;
var sum = num1 - num2;
console.log(sum);

var num1 = 450;
var num2 = 420;
var sum = num1 * num2;
console.log(sum);

var num1 = 450;
var num2 = 420;
var sum = num1 / num2;
console.log(sum);

var num1 = 450;
var num2 = 420;
var sum = num1 % num2;
console.log(sum);

var a = 10;

if (a > 20) {
  console.log("rana is good boy");
} else {
  console.log("rana is a bad boy");
}


var number = parseInt(prompt("enter your number :  "));

if (80 <= number) {
  console.log("the result is A+");
} else if (70 <= number) {
  console.log("the result is A");
} else if (60 <= number) {
  console.log("the result is A-");
} else if (50 <= number) {
  console.log("the result is B");
} else if (40 <= number) {
  console.log("the result is C");
} else if (33 <= number) {
  console.log("the result is D");
} else if (0 <= 32) {
  console.log("Failed");
}

function createCounter(start) {
  let current = start;
  return function () {
    return current++;
  };
}
const a = 50;
const coounter = createCounter(a);
console.log(coounter()); // Output: 50
console.log(coounter()); // Output: 51
console.log(coounter()); // Output: 52


function createSeries(start) {
  var now = start;
  return function () {
    return now++;
  };
}

const r = 35;
const series = createSeries(r);

for (var i = 0; i <= 5; i++) {
  console.log(series());
}

// craete a object

function person(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
  this.print = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.marks);
  };
}
var person1 = new person("rana parvesh", 24, [25, 26, 27]);
var person2 = new person("shoron", 25, [252, 3226, 227]);
var person3 = new person("raihan", 23, [215, 126, 127]);

person1.print();
person2.print();
person3.print();



var person1 = "rana &";
var person2 = " shoron";
var relation = person1 + person2;
console.log(relation, "are brother");

//now for the function and loop

function myFunction(start) {
  var result = start;
  return function () {
    return result++;
  };
}
var r = 52;
var funny = myFunction(r);
for (var i = 1; i <= 1; i++) {
  console.log(funny());
  if (funny == 52) {
    console.log("result is loyal");
  } else {
    console.log("result is hungry");
  }
}

document.getElementById("shoron").innerHTML = "My name is Rana";
document.querySelector("h1").innerHTML = "  i am student";
document.querySelector(".hasi").innerHTML = "  i am student";

//heackerranked problem 02

function stringAnagram(dictionary, query) {
  function normalize(str) {
    return str.split("").sort().join("");
  }

  const dictionaryCount = {};
  dictionary.forEach((word) => {
    const normalizedWord = normalize(word);
    if (dictionaryCount[normalizedWord]) {
      dictionaryCount[normalizedWord]++;
    } else {
      dictionaryCount[normalizedWord] = 1;
    }
  });

  return query.map((q) => {
    const normalizedQuery = normalize(q);
    return dictionaryCount[normalizedQuery] || 0;
  });
}

function main() {
  const dictionary = ["listen", "silent", "enlist", "google", "gooegl"];
  const query = ["listen", "enlists", "google", "googles"];
  const result = stringAnagram(dictionary, query);
  console.log(result); // Output should be [3, 0, 2, 0]
}

main();

// javascript map

// Creating a new Map
let map = new Map();

// Adding key-value pairs
map.set("name", "John");
map.set("age", 30);
map.set(true, "boolean value");
map.set({ key: "object" }, "object value");

// Getting values
console.log(map.get("name")); // Output: John
console.log(map.get(true)); // Output: boolean value

// Checking existence of a key
console.log(map.has("age")); // Output: true
console.log(map.has("address")); // Output: false

// Deleting a key-value pair
map.delete("age");
console.log(map.has("age")); // Output: false

// Getting the size of the Map
console.log(map.size); // Output: 3

// Iterating over Map using forEach
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: John
// true: boolean value
// [object Object]: object value

// Using keys, values, and entries iterators
for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}

// Clearing the Map
map.clear();
console.log(map.size); // Output: 0

//now my practice

var number = [1, 2, 3, 4, 5];

var result = number.map((num) => {
  return 3 * num;
});
console.log(number);
console.log(result);

let math = (a, b) => {
  // others work
  return a + b;
};
console.log(math(50, 60));

let p1 = "rana";
let p2 = "shoron";
let relation = true;

if (p1 == "rana") {
  if (p2 == "shoron") {
    if (relation == true) {
      console.log("awesome");
    } else {
      console.log("very bad");
    }
  }
}

// shorot waye
var p3 = "taniya";
var p4 = "jemiim";
var p6 = true;

if ("taniya" == p3 && "jemiim" == p4 && true == p6) {
  console.log("both are one");
} else {
  console.log("they are differant");
}

function rana(name, subject, contact) {
  this.name = name;
  this.subject = subject;
  this.contact = contact;
  this.print = function () {
    console.log(this.name);
    console.log(this.subject);
    console.log(this.contact);
  };
}

var student1 = new rana(
  "rana parvesh",
  ["accounting", "management", "marketing"],
  "01794950779"
);
var student2 = new rana(
  "shhoron hossain",
  ["civis", "", "bangla"],
  "01783128139"
);
var student3 = new rana(
  "raihan",
  ["camistry", "botany", "zlozy"],
  "01516381052"
);

student1.print();
student2.print();
student3.print();


var days = 31;
var star = 7;

console.log("\n\n calander of june 2024\n");
console.log("sun   mon   tue   wed   thu    fri   sat");

for (var i = 0; i <= 5; i++) {
  var dayrow = "";
  for (var j = 0; j < 7; j++) {
    var currentday = 7 * i + j - start;
    if (currentday > days) {
      break;
    } else if (currentday < 1) {
      currentday = "  ";
      if (currentday > 9) {
        dayrow += currentday = "    ";
      } else {
        dayrow += currentday + "     ";
      }
    }
  }
  console.log(dayrow);
}
*/
