/*var number = [1, 2, 3, 4, 5];
var new_number = [...number, 4, 5, 6];

console.log(new_number); // this is spread operator basic feature
*/
var numbers = [1, 2, 3, 4, 5];
var a = [...numbers]; // exact copy of new numbers a is not change but numbers are change

numbers.push(10);
console.log(a);

// concut methods

var rana = ["beef", "suger", "rice"];
var shoron = ["fish", "coffie", "tea"];
var relation = [...rana, ...shoron];
console.log(relation);

// object methods

var obj1 = {
  name: "rana",
  work: "developer",
};
var obj2 = {
  name: "shoron",
  work: "graphic- design",
};
console.log({ ...obj1 }, { ...obj2 });
