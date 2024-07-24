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
/*
// fat arrey

var hobby = {
  person: "Rana",
  hobby: ["playing", "eating", "travelling", "singing", "danceing"],
  printhobby: function () {
    this.hobby.forEach((r) => {
      console.log(`${this.person} is also like ${r}`);
    });
  },
};
hobby.printhobby();

// arrey.find()

var number = [25, 52, 36, 552, 74];

var result = number.find((cv, ci, arr) => {
  console.log(ci);
  console.log(arr);
  return cv % 3;
});
console.log(result);

//arrey.slice() -positive

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.slice(2, 4);
console.log(result);

//arrey.slice() -negetive

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.slice(-2, 6);
console.log(result);

// arrey.splice() / positive methods

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.splice(2, 1, 25, 65, 34);
console.log(result);
console.log(numbers);

// arrey.splice() / negetive methods

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.splice(-2, 1, 25, 65, 34);
console.log(result);
console.log(numbers);


// arrey.map() methods

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.map((n) => {
  return n / 2;
});
console.log(result);


// arrey.push() methods

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.push(25, 26, 27);

console.log(result);
console.log(numbers);

// arrey.pop() methods

var numbers = [123, 654, 987, 963, 369, 147, 236];
var result = numbers.pop(1);

console.log(result);
console.log(numbers);

// arrey.concut()

var arr1 = [25, 26, 27, 28, 29, 30];
var arr2 = [31, 32, 33, 34, 35, 36];

result = arr1.concat(arr2);
console.log(result);

// arrey . reduce() methods
var arrey = [231, 123, 145, 256, 254, 365, 852];
var result = arrey.reduce((pv, fv) => {
  return pv + fv;
});
console.log(result);


for (var i = 0; i < 10; i++) {
  // console.log(i);
}

// its the normal loop

//now write the for in loop

var myObject = {
  name: "rana",
  department: "management",
  birth_date: "25/01/1999",
};

for (property in myObject) {
  console.log(property);
}
var myObject = "i also like play football";
for (element of myObject) {
  console.log(element);
}

// ternary operator

var rana = 10;

if (rana > 20) {
  console.log("rana was grater than 20");
} else {
  console.log("rana was less than 20");
}
//its a normal condition
//now write the ternary operator

let shoron = 100;
var result = shoron > 20 ? "greater than" : "less than";
console.log(`shoron was ${result} 20`);


//spread operator

// concut methods
var rana = [12, 14, 16, 18, 20, 22];
var shoron = [24, 26, 28, 30, 32, 34];
var relation = [...rana, ...shoron];

console.log(relation);

// when use to the object of spread operator

var obj1 = {
  name: "rana",
  works: "web developer",
};

var obj2 = {
  name: "shoron",
  works: "graphic designer",
};

console.log({ ...obj1 }, { ...obj2 });

// use normal number

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [...number];

number.push(12, 14, 20);
number.pop();

console.log(number);
console.log(result);


// rest operator
//use arguments

function rana() {
  console.log(arguments);
}
rana(10, 12, 13, 14, 15, 16, 17, 20);

// now use the rest operator
// rest operator allwayes use to the last parmeter 

function taniya(a, ...params) {
  console.log(a, params);
}
taniya(20, 220, 24, 26, 28, 30, 21);


var a = "";

if (a) {
  console.log("the value was true");
} else {
  console.log("the value was false");
}

var b = 25;
result = b ? "true" : "false";
console.log("the value was", result);


// defults parameters

function rana(rana = 10) {
  console.log(rana);
}
rana(52);

// fat arrow

var rana = {
  learn: "javascipt",
  framework: ["react", "angular", "vue"],
  printDisply: function () {
    this.framework.forEach((ex) => {
      console.log(`${this.learn} framework was ${ex}`);
    });
  },
};
rana.printDisply();


var arr = [25, 26, 27, 28, 29, 30];
var arr1 = [...arr];
arr.push(31, 32, 33, 34);

console.log(arr);
console.log(arr1);

//old methods

var obj = {
  personOne: "shoron hossain",
  addres: "mill road",
  house: 24,
  age: 25,
  skills: {
    education: "BSS",
    works: " graphic design",
    family: {
      mom: "asma begum",
      dad: "mahbub alam",
    },
  },
};
var {
  skills: { family: F },
} = obj;
console.log(F, "\n\n");
//new methods

var obj1 = {
  personOne: "rana parvesh",
  addres: "choto-sultanpur",
  house: 132,
  age: 25,
  skills: {
    education: "BBA",
    works: " Web-developer",
    family: {
      mom: "parul begum",
      dad: "kalim uddin",
    },
  },
};
var {
  skills: {
    family: { mom: x }, // use alias
  },
} = obj1;
console.log(x);

//

var rana = 250;
var shoron = 2500;
[shoron, rana] = [rana, shoron];
console.log(rana, shoron);
*/

// var rana = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// practice   function
function serial(start) {
  var now = start;
  return function () {
    return now++;
  };
}
var counter = serial(0);
counter();
for (let i = 0; i < 10; i++) {
  console.log(counter());
}
var rana = "Rana is a good Boy";
for (var i = 0; i < 10; i++) {
  console.log(rana);
}
