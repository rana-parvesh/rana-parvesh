// nesting

var p1 = "rana";
var p2 = "shoron";
var areTheyBrother = true;
if ("rana" == p1) {
  if ("shoron" == p2) {
    if (areTheyBrother) {
      console.log("rana & shoron are brother ");
    } else {
      console.log("they are not  brother ");
    }
  }
}

//another waye to easy

var p3 = "raihan";
var p4 = "jimu";
var areTheyBrother = false;

if ("raihan" == p3 && "jimu" == p4 && areTheyBrother) {
} else {
  console.log("they are not a brother");
}

//or operator 2,3,5,7

var n = 2;

if (n < 10 && (2 == n || 3 == n || 5 == n || 7 == n)) {
  console.log("this number ", n, "is smaller than10 and its a prime number");
} else if (n < 10) {
  console.log("this number ", n, "is smaller than10 and not a prime number");
} else {
  console.log("this number ", n, "is greater tham 10");
}
