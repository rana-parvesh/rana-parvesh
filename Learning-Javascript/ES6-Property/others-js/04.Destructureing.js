// object - Destructureing
/*
//object destructure old waye
const user = {
  nam: "rana",
  id: 213,
  age: 25,
};
var nam = user["nam"];
console.log(nam);

//object destructure preasent waye
const use = {
  x: "rana",
  id: 213,
  age: 25,
};
const { id: nid } = use; //id:nid alias
console.log(nid);

//object destructure nested  waye
var useed = {
  x: "rana",
  id: 213,
  age: 25,
  education: {
    honers: "BBA",
  },
};
// when api not give me a value  the console is crash the programe
// its solve for the a blank and defult object
const { education: { honers: X } = {} } = use; // {} blank object
console.log(X);
*/
// now write the arrey destruture (normal)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var [, a, , , , , b] = numbers;
console.log(a, b);

// now write the arrey destruture (nested)
var number = [1, 2, 3, [100, 200, 500, 700], 4, 5, 6, 7, 8, 9];
var [, , , [, a, , b]] = number;
console.log(a, b);

//beautiful usecase ( swap  the value ) old waye
var a = "rana";
var b = "shoron";
var newVar = a;
a = b;
b = newVar;
console.log(a, b);

//beautiful usecase ( swap  the value ) new waye
var r = "rana";
var s = "shoron";
[s, r] = [r, s];
console.log(r, s);

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
console.log(F);
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
