// for loop, for in, for of modern javascript
//for
for (var i = 0; i < 10; i++) {
  // console.log(i);
}

// for in

const data = {
  name: "rana",
  birth: "1999.",
  department: "management",
};
for (let x in data) {
  console.log(`${x} : ${data[x]}`);
}
// for (property in myObj) {
//   console.log(property);
// }

// for of
const myString = "i am rana";
for (element of myString) {
  // console.log(element);
}
// in for the index and of for the elementd separation
