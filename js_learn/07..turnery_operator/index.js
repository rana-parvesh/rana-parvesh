// turnary operator

var n = 0; // this is re use from previes class
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

//now right here

var n = 0;
var result;
var reminder = n % 2;
result = 0 == reminder ? "even" : "odd";
console.log("this numbe is", result);

// negetive or possitive

var n = -1;
var result;

result = n < 0 ? "negetive" : "positive";
console.log("this numbe is", result);
