// we are the genarel thinks
/*
var name = "rana parvesh";
var age = 25;
var cgpa = 3.56;
var language = ["banagla", "english", "hindi", "arbi"];

//now write the object
var student1 = {
  name: "rana parvesh",
  age: 25,
  cgpa: 3.56,
  language: ["banagla", "english", "hindi", "arbi"],
};
console.log(student1);


// now write some student information
// adding a constructor /temolate
var student1 = {
  name: "rana parvesh",
  age: 25,
  cgpa: 3.56,
  language: ["banagla", "english", "hindi", "arbi"],
};

var student2 = {
  name: "shoron",
  age: 30,
  cgpa: 3.92,
  language: ["banagla", "english", "hindi"],
};

var student3 = {
  name: "taniya",
  age: 19,
  cgpa: 3.2,
  language: ["banagla", "hindi", "arbi"],
};

var student4 = {
  name: "raihan",
  age: 23,
  cgpa: 3.0,
  language: ["english", "hindi", "arbi"],
};

var student5 = {
  name: "sammi",
  age: 22,
  cgpa: 3.1,
  language: ["banagla", "english", "arbi"],
};
*/
//now write the easy waye

function StudentDocument(name, age, cgpa, language) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.language = language;
  this.print = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.language);
  };
}
var student1 = new StudentDocument("rana parvesh", 24, 3.92, [
  "bangla",
  "english",
  "arbi",
]);
var student2 = new StudentDocument("shoron", 25, 4.92, [
  "bangla",
  "urdu",
  "arbi",
]);
var student3 = new StudentDocument("muna", 22, 2.92, [
  "bangla",
  "nepali",
  "arbi",
]);
var student4 = new StudentDocument("taniya", 19, 3.56, [
  "bangla",
  "turki",
  "arbi",
]);
var student5 = new StudentDocument("raihan", 25, 3.81, [
  "bangla",
  "farsi",
  "arbi",
]);

student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
