/*
- Day 8: Objects and JSON
  - Object creation, accessing properties
  - Methods in objects
  - JSON introduction এবং JSON.stringify(), JSON.parse()
  */

// Basic Concepts:
// literals or the new Object()
// Using object literal
/*
const student = {
  name: "Rana",
  age: 22,
  major: "BBA",
};
console.log(student.name); // Rana
console.log(student["age"]); // 22

*/
// practice
{
  const person = {
    name: "shoron",
    age: 25,
    proffesion: "graphoc desigener",
  };
  console.log(person.proffesion);
}
/*
// Using new Object()
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
*/
// practice
{
  const person = new Object();
  person.name = "taniya";
  person.age = 19;
  person.proffesion = "student";

  console.log(person);
}

// Advanced Concepts:
// student.grade = "A";

const student = {
  name: "Taniya",
  age: 19,
  profession: "student",
};

student.grade = "A";
console.log(student);
// Output:
// {
//   name: "Taniya",
//   age: 19,
//   profession: "student",
//   grade: "A"
// }

// car["color"] = "Blue";
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

car["color"] = "Blue";
console.log(car);
// Output:
// {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   color: "Blue"
// }

// Nested Objects:
const person = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};
console.log(person.address.city); // New York

// 2. Methods in Objects
// Basic Concepts:
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
/*
Advanced Concepts:
Using this Keyword:
The this keyword refers to the current object within a method.
*/
const user = {
  name: "Alice",
  greet: function () {
    return `Hello, ${this.name}!`;
  },
};
console.log(user.greet()); // Hello, Alice!

//practice?

const personp = {
  name: "rana parvesh",
  messeage: function () {
    return `hellow, ${this.name}!`;
  },
};
console.log(personp.messeage());

// Arrow Functions in Methods:
// Arrow functions do not have their own this context.
const user2 = {
  name: "Bob",
  greet: () => {
    return `Hello, ${this.name}!`; // undefined because arrow functions don't bind `this`
  },
};
console.log(user2.greet()); // Hello, undefined!

/*
3. JSON Introduction and JSON.stringify(), JSON.parse()
Basic Concepts:
What is JSON?
JSON (JavaScript Object Notation) is a format for storing and transporting data, commonly used in web applications.
It is easy for both humans and machines to read and write.
*/

const rana = {
  name: "Rana",
  age: 22,
  major: "BBA",
};

/*
Converting Objects to JSON (JSON.stringify): 
Converts a JavaScript object into a JSON string.
*/
const jsonString = JSON.stringify(student);
console.log(jsonString); // {"name":"Rana","age":22,"major":"BBA"}

{
  const rana = {
    name: "shoron",
    age: 25,
    major: "BBS",
  };
  const jsonString = JSON.stringify(rana);
  console.log(jsonString);
}

/*

Advanced Concepts:
Converting JSON to Objects (JSON.parse):
Converts a JSON string back into a JavaScript object.
*/
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name); // Rana

{
  const rana = {
    name: "shoron",
    age: 25,
    major: "BBS",
  };
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject.age);
}
/*
Handling Complex Objects:
You can stringify and parse objects that contain arrays and nested objects.
*/
const complexObject = {
  students: [
    { name: "Rana", age: 22 },
    { name: "Alex", age: 21 },
  ],
};
const complexJson = JSON.stringify(complexObject);
console.log(complexJson); // {"students":[{"name":"Rana","age":22},{"name":"Alex","age":21}]}

const parsedComplex = JSON.parse(complexJson);
console.log(parsedComplex.students[0].name); // Rana

//practice

{
  const complex = {
    person: [
      { name: "rana parvsesh", age: 25 },
      { name: "shroron", age: 26 },
    ],
  };

  const jsonString = JSON.stringify(complex);
  console.log(jsonString);
  const parse = JSON.parse(jsonString);
  console.log(parse.person[1].name); // shoron
}
