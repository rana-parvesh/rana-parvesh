//compare item tools = (==,!=,<,>,>=,<=) is use if, else if, else

var a = 52;
if (a > 60) {
  console.log(a);
  console.log("the number", a, "is smaller than 20");
} else if (a > 55) {
  console.log("the number", a, "is smaller than 55");
} else {
  console.log("the number", a, "is grater than 20");
}

//another

var a = 22;
var b = 22;

if (a > b) {
  console.log("a greater than m");
} else if (a >= b) {
  console.log("n is grater than or equal m");
} else if (n == m) {
  console.log("n is equal m");
} else {
  console.log("a is smaaller or equal m");
}

//the blunder of = or ==

var v = 10;

if (8 == v) {
  console.log("v is equal to 8");
} else {
  console.log("v is not equal to 8");
}
