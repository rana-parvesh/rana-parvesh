// arrey .find()

var number = [25, 31, 63, 85, 46, 87];
result = number.find((pv) => {
  return pv > 65;
});
console.log("arrey.find = ", result);

//arrey.filter()

// var number = [25, 31, 63, 85, 46, 87];
filter = number.filter((pv) => {
  return pv > 63;
});
console.log("arrey.filter = ", filter);

// arrey.slice()
var slice = number.slice(2, 3);
console.log("arrey.slice = ", slice);

//arrey.splice()

var splice = number.splice(2, 2, 31, 32, 33);
console.log("arrey.splice = ", splice);
// console.log(number);
var numbers = [1, 2, 3, 4, 5, 6, 7];

// Array.map()

var map = numbers.map(function (pv) {
  return pv * 6;
});
console.log("arrey.splice = ", splice);
console.log("arrey.map = ", map);

//push

var friends = ["rana", "shoron", "raihan", "hasi"];
var push = friends.push("muna");
console.log("arrey.push = ", friends);

//pop

var friends = ["rana", "shoron", "raihan", "hasi"];
var pop = friends.pop();
var friends = ["rana", "shoron", "raihan", "hasi"];
console.log("arrey.pop = ", friends);

//shift

var friends = ["rana", "shoron", "raihan", "hasi"];
var shift = friends.shift("muna");
console.log("arrey.shift = ", friends); //unshift back to the arrey elemrnts to 1st item
// console.log(shift);

//concut

var arr1 = ["rana", "shoron", "raihan", "hasi"];
var arr2 = ["tanzim", "taniya", "tanvir", "sazzad"];

var sum = arr1.concat(arr2);
console.log("arrey.concut = ", sum);

// reduce
var number = [25, 31, 63, 85, 46, 87];
var reduce = number.reduce((pv, fv) => {
  return pv + fv;
});
console.log("arrey.reduce = ", reduce);
