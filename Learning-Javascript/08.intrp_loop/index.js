// while loop
/*
var i = 0; //its normal loop
while (i < 10) {
  i++;
  console.log(i);
}

// its reminder loop
var i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

//

var i = 0;
while (true) {
  console.log(i);
  if (10 == i) {
    break;
  }
  i++;
}

// hasin haydar student demant part
// compare i++ and ++i
// its reminder loop
var i = 0;
while (i++ < 10) {
  console.log(i);
}

var i = 0;
console.log("\n restart \n");

while (++i < 10) {
  console.log(i);
}

// do while loop

var n = 0;
do {
  console.log(n);
  n++;
} while (n < 10); // <=for 1 to 10

// for loop condition and  break

/*concept
var i = 0
for ( iniitailization, condition, steping){

}
*/ /*
var i;
for (i = 0; i <= 10; i++) {
  // where i+=2 for the couple
  console.log(i);
}

// public demand

var i, j;
for (i = 0, j = 10; i <= 10; i++, j--) {
  console.log(i, j);
}

//  for loop factorial

var a = 5;
var factorial = 1;
for (var i = a; i > 1; i--) {
  factorial = factorial * i;
  // factorial *=i
}
console.log(factorial);

// another

var n = 4;
var factorial = 1;

for (var i = 1; i <= 10; i++) {
  factorial *= i;
  console.log(" factorial of", i, "is", factorial);
}

// number series print
/*
s0 = 1 2 3 4 5 6 7 8 9 
s1 = 2 4 6 8 10 12 14 
s2 = 1 4 7 10 13 16 
s3 =0 3 8 15 24 35 48
s4 = 1 4 3 8 5 12 7 16
s5 =0 1 1 2 3 5 8 13
*/

// s1 = 2 4 6 8 10 12 14
/*
var s = "";
var n;
for (var i = 1; i < 10; i++) {
  n = i * 2;
  s = s + n + "  ";
}
console.log("series 1=", s);

// s2 = 1 4 7 10 13 16
s = "1 ";
n = 1;
for (var i = 1; i < 10; i++) {
  n = n + 3;
  s = s + n + "  ";
}
console.log("series 2=", s);

// s3 =0 3 8 15 24 35 48
s = "";
for (var i = 1; i < 10; i++) {
  n = i * i - 1;
  s = s + n + "  ";
}
console.log("series 3=", s);

// s4 = 1 4 3 8 5 12 7 16

s = "";
for (var i = 1; i < 10; i++) {
  n = i;
  if (n % 2 == 0) {
    n = i * 2;
  }
  s = s + n + "  ";
}
console.log("series 4=", s);

// s5 =0 1 1 2 3 5 8 13
s = " 0 1";
n = 0;
var x = 0;
var y = 1;
for (var i = 1; i < 10; i++) {
  n = x + y;
  x = y;
  y = n;

  s = s + n + "  ";
}
console.log("series 5=", s);

// multipilation table
var series = ""; // Initialize series as an empty string
for (var i = 1; i <= 10; i++) {
  series += i + "= ";
  for (var j = 1; j <= 10; j++) {
    series += i * j + " ";
  }
  series += "\n"; // New line after each row
}
console.log(series);

var rana;
for (var i = 1; i <= 10; i++) {
  rana = i + " = ";
  for (var j = 1; j <= 10; j++) {
    rana += i * j + " ";
  }
  console.log(rana);
}

// the divisors

var n = 144;
var range = math.cail(math.sqrt(n));
var divisors = "";

for (var i = 1; i <= range; i++) {
  if (n % i == 0) {
    if (i == n / i) {
      divisors += i + "  ";
    } else {
      divisors += i + " " + n / i + "  ";
    }
  }
}
console.log(divisors);
*/
// the calander print of for loop
var mounth = "december 2024";
var days = 30;
var start = 5;

console.log("\n\n calander of ", mounth, "\n");
console.log("sun  mon  tue  wed  thu  fri  sat");

for (var i = 0; i <= 5; i++) {
  var dayrow = "";
  for (var j = 0; j < 7; j++) {
    var currentday = 7 * i + j - start;
    if (currentday > days) {
      break;
    } else if (currentday < 1) {
      currentday = " ";
    }
    if (currentday > 9) {
      dayrow += currentday + "   ";
    } else {
      dayrow += currentday + "    ";
    }
  }
  console.log(dayrow);
}
