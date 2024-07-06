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
*/

