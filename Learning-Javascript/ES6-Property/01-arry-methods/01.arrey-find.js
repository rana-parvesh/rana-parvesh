//arrey.prototype.find

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = numbers.find(function (currentValue) {
  return currentValue > 5;
});
console.log(numbers);
console.log(result);

/*
the function will contoinew to when its result are false,
 when its true its break and show the value

 and its not change the main arrey
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 5;
});
console.log(numbers);
console.log(result);

// now write a example off normal function and result is errore

class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test() {
    console.log("hellow everyone");
  }
  exampleFunction() {
    let arrey = [1, 2, 3];
    arrey.find(function () {
      this.test();
    }, this);
  }
}
let student = new student("rana", 25);
student.exampleFunction();

// when use the arrow function solve the this problem property

class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test() {
    console.log("hellow everyone");
  }
  exampleFunction() {
    let arrey = [1, 2, 3];
    arrey.find(() => {
      this.test();
    });
  }
}
var student = new student("rana", 25);
student.exampleFunction();
