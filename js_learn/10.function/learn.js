/*function myFunction() {
  var carname = "volvo";
  console.log(carname);
}
myFunction();

var num1 = prompt(" enter first number :");
var num2 = prompt(" enter secend number :");

num1 = parseInt(num1, 10);
num2 = parseInt(num1, 10);

var sum, sub;

sum = num1 + num2;
document.write("addition =  " + sum);

sub = num1 - num2;
document.write("substraction =  " + sub);

//

function sleep(name, time) {
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

//calculation some math

var base = parseFloat(prompt("enter base : "));
var height = parseFloat(prompt("enter height : "));

//this is rectringle range

var area = (base * height) / 2; //this is another one  // js_learn/10.function/index.js
document.write("area = " + area);

var n = 11;

if (n % 2 == 0) {
  document.write("even");
} else {
  document.write("odd");
}


//

var n1 = prompt("enter your number n1 :  ");
var n2 = prompt("enter your number n2 :  ");
var n3 = prompt("enter your number n3 :  ");

if (n1 > n2 && n1 > n3) {
  document.write("n1 is large number", n1);
}

if (n2 > n1 && n2 > n3) {
  document.write("n2 is large number", n2);
}

if (n3 > n1 && n3 > n2) {
  document.write("n3 is large number", n3);
}

// vowel or consonent

var letter = prompt("enter your letter :  ");

if (
  letter == "a" ||
  letter == "e" ||
  letter == "i" ||
  letter == "o" ||
  letter == "u"
) {
  document.write("vowel");
} else {
  docu(" consonent");
}

//condition switch
// **  important thinks **
switch, case, break , deafult

var digite = prompt(" Enter your digite : ");

switch (digite) {
  case "0":
    document.write("zero");
    break;
  case "1":
    document.write("one");
    break;
  case "2":
    document.write("two");
    break;
  case "3":
    document.write("three");
    break;
  case "4":
    document.write("four");
    break;
  case "5":
    document.write("five");
    break;
  case "6":
    document.write("six");
    break;
  case "7":
    document.write("seven");
    break;
  case "8":
    document.write("eight");
    break;
  case "9":
    document.write("nine");
    break;
  default:
    document.write("invalide  number");
}

//Task -- 5
var letter = prompt(" Enter your letter :  ");
letter = letter.toLocaleLowerCase();

switch (letter) {
  case "a":
    document.write("vowel");
    break;
  case "e":
    document.write("vowel");
    break;
  case "i":
    document.write("vowel");
    break;
  case "o":
    document.write("vowel");
    break;
  case "u":
    document.write("vowel");
    break;

  default:
    document.write("consonant");
}


//another shortcut waye

//Task -- 5
var letter = prompt(" Enter your letter :  ");
letter = letter.toLocaleLowerCase();

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write("vowel");
    break;
  default:
    document.write("consonant");
}
//first step
var sum = 0;
for (var i = 0; i <= 100; i++) {
  sum += i;
}
document.write(sum);
}

//second step

//user input
var m = parseInt(prompt("Enter your starting number"));
var n = parseInt(prompt("Enter your last number"));

var sum = 0;
for (var i = m; i <= n; i++) {
  sum += i;
}
document.write(sum);

//

//user input
var m = parseInt(prompt("Enter your time duration :  "));
var n = 0.026; //parseInt(prompt("Enter your rate number :  ", 0.26));
var totalTaka = m * n;

for (var i = 0; i <= 0; i++) {
  document.write("This is the value (total taka)  =  ");
}
document.write(totalTaka);

var result = 100;
if (80 <= result) {
  document.write("A+ = 4 ");
} else if (75 <= result) {
  document.write("A =3.75 ");
} else if (70 <= result) {
  document.write("A- =3.50 ");
} else if (65 <= result) {
  document.write("B+ = 3.25 ");
} else if (60 <= result) {
  document.write("B = 3.00 ");
} else if (55 <= result) {
  document.write("B- = 2.75 ");
} else if (50 <= result) {
  document.write("C+ =2.50 ");
} else if (45 <= result) {
  document.write("C = 2.25");
} else if (40 <= result) {
  document.write("D = 2.00");
} else if (0 <= result) {
  document.write("F");
}
<br></br>;
//
{
  const s1 = parseInt(prompt("Enter your Accounting :  "));
  const s2 = parseInt(prompt("Enter your Management :  "));
  const s3 = parseInt(prompt("Enter your Marketing :  "));
  const s4 = parseInt(prompt("Enter your Law :  "));
  const s5 = parseInt(prompt("Enter your Taxation :  "));
  const s6 = parseInt(prompt("Enter your Statistics :  "));
  const s7 = parseInt(prompt("Enter your Behavior :  "));
  const s8 = parseInt(prompt("Enter your Insurance :  "));
  const s9 = parseInt(prompt("Enter your Operation Management :  "));
  const totalPoints = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9;
  document.write("\n\nTotal Points = ", totalPoints, "\n");

  const GPA = totalPoints / 9;
  document.write("GPA = ", GPA);
}


//while

var i = 1;
sum = 0;

while (i <= 50) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }
  i++;
}
document.write("  ", sum);

//do while loop

var i = 11;
do {
  console.log("  " + i);
  i++;
} while (i <= 20);

//break and contion

for (i = 1; i <= 100; i++) {
  if (i == 25) {
    break;
  }
  if (i == 1) {
  }
  document.write(", ", i);
}

// condotion check with turnury operatior

// var number = number(prompt("Enter your number : "));
var number = parseInt(prompt(" Enter your number : "));
var result = number > 0 ? "positive" : number < 0 ? "negetive" : "zero";
document.write(result);



// lets do the function

var s = 4;
var r = s * s;
document.write("result = ", r, "<br>");

var s = 5;
var r = s * s;
document.write("result = ", r, "<br>");

var s = 6;
var r = s * s;
document.write("result = ", r, "<br>");

//create in function

function square() {
  var s = 4;
  var r = s * s;
  document.write("result = ", r, "<br>");
}
//here is calling function

square();
square();
square();


//pass the paramiter

function square(rana, shoron) {
  var r = rana * shoron;
  document.write("result = ", r, "<br>");
}
//here is calling function

square(5, 8);
square(6, 7);
square(7, 3);

//use return keyword

function square(rana, shoron) {
  var r = rana * shoron;
  return r;
}

document.write("result = ", r, "<br>");
document.write(square(5, 8));

// addition function

function add(tara, nana) {
  result = tara + nana;
  document.write("sum = ", result, "<br>");
}
add(25, 26);

// this is sub function

function sub(ta, na) {
  result = ta - na;
  document.write("sub = ", result);
}
sub(25, 26);

// summary of this class:
// 1. create a function
// 2. calling a function
// 3. paraiter pass
// 4. returninhg value


function rana(x, y) {
  var result = x + y;
  document.write(result, "<br>");
}
rana(25, 28);

function sub(x, y) {
  var result = x - y;
  document.write(result, "<br>");
}
sub(25, 2);

function mul(x, y) {
  var result = x * y;
  document.write(result, "<br>");
}
mul(5, 28);

function vag(x, y) {
  var result = x / y;
  document.write(result);
}
// vag(25, 28);
vag(50, 25);

// task - 7 IIFES that print sum of two numbers (immidiyely)

(function sum(x, y) {
  var result = x + y;
  document.write(result);
})(2, 5);

// function Expression
var d2 = function displayMessage(msg) {
  document.write(msg);
};

d2(" this is the function expression massage ");


// this is the arrey

var arrey = ["rana ", "shoron ", "zimu ", "raihan ", " hasi"];

// for new variable
arrey.push("muna");
arrey.push("phota");
arrey.push("ayon");
document.write(arrey, "<br>");
document.write(arrey.length, "<br>");
document.write(arrey[5], "<br>");

// for remove a varaiable

arrey.pop();
document.write(arrey, "<br>");

// arrey concuting

var n1 = [" hellow bangladesh  ", " how are you"];
var n2 = [" hellow pakistan  ", " how are you"];
var n = n1.concat(n2);
document.write(n);

// use arry for loop

var num = [25, 36, 47, 89, 65];
var sum = 0;

for (var i = 0; i <= 4; i++) {
  document.write(num[i], "<br>");
  sum = sum + num[i];
}
document.write("the value of sum = ", sum, "<br>");


// user input
var num = new Array();
for (var i = 0; i < 5; i++) {
  num[i] = parseInt(prompt("enter your numbers : "));
}
var sum = 0;

for (var i = 0; i <= 4; i++) {
  document.write(num[i], "<br>");
  sum = sum + num[i];
}
document.write("the value of sum = ", sum, "<br>");*/

/*//some arrey method

//push , pop, concut, shift , unshift ,splice,slice,short method

var names = ["rana", "shoron", "raihan", "taniya"];

console.log(names);
names.push("hena");
 console.log(names);

 names.pop();
 console.log(names);

 names.shift();
 console.log(names);

 names.unshift("parvesh");
 console.log(names);

 names.splice(3, 0, "rabbbi", "sumaiya");
 console.log(names);

slice

 var newArrey = names.slice(1);
console.log(newArrey);

//short method (alphabet)
names.sort();
console.log(names);
names.reverse();
console.log(names);

//sorting the number

var numbers = [25, 2, 0, 91, 98, 35, 42, 12];
numbers.sort(function (a, b) {
  return a - b; //for the sort reversm (b- a)
});
console.log(numbers);

// arrey dimantion

function highestScore(scores) {
  var max = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
    }
  }
  return max;
}
var Scores = [89, 45, 96, 56, 78, 95, 65, 36, 75, 85, 94, 75, 98];
var maxscore = highestScore(scores);
document.write(maxscore);

// task --9

//2D arrey
//create a function called topScorer that will
//recived a 2d arrey called player Info
// based on hghest score , return the name of the player

function topScorer(platersInfo) {
  document.write(platersInfo);
}
var players = [
  ["rana", 99],
  ["shoron", 78],
  ["muna", 56],
  ["hasi", 89],
];

// ------------object-----------*/
