function myFunction() {
  var carname = "volvo";
  console.log(carname);
}
myFunction();
/*
var num1 = prompt(" enter first number :");
var num2 = prompt(" enter secend number :");

num1 = parseInt(num1, 10);
num2 = parseInt(num1, 10);

var sum, sub;

sum = num1 + num2;
document.write("addition =  " + sum);

sub = num1 - num2;
document.write("substraction =  " + sub);
*/
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
