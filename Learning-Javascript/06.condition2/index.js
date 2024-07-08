// Result calculator

var result = 70;
console.log(result);

if (80 <= result) {
  console.log("the result is A+");
} else if (70 <= result) {
  console.log("the result is A");
} else if (60 <= result) {
  console.log("the result is A-");
} else if (50 <= result) {
  console.log("the result is B");
} else if (40 <= result) {
  console.log("the result is C");
} else if (33 <= result) {
  console.log("the result is D");
} else if (0 <= result) {
  console.log("the result is F");
}
//this class for condition ++

var n = -3;
if (n > 0) {
  var result = " this number " + n + " is posive";
} else {
  var result = " this number " + n + " is negetive";
}
console.log(result);

// even & odd

var n = 0;
var result;
var reminder = n % 2;

if (0 == n) {
  result = " this is nutrol number";
} else if (0 == reminder) {
  result = "ths number is even";
} else {
  result = " this number is odd";
}
console.log(result);

// examle some logic

var movieRating = "pg";
var age = 12;
if ("pg" == movieRating && age >= 13) {
  console.log("you can watch this movie");
} else if ("r" == movieRating && age >= 18) {
  console.log("you can watch this movie");
} else if ("g" == movieRating) {
  console.log("you can watch this movie");
} else {
  console.log("you can not watch this movie");
}

// another short waye to movie logic

var mr = "pg";
var ag = 17;

if (("pg" == mr && ag >= 13) || ("r" == mr && ag >= 18) || "g" == mr) {
  console.log("you can watch this movie");
} else {
  console.log("you can not watch this movie");
}
