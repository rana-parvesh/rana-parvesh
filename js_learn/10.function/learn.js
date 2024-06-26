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
document.write(sum);*/
