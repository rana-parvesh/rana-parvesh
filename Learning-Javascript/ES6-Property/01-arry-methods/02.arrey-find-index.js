//Arrey. prototype. find index

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = numbers.findIndex((currentValue, currentIndex, arr) => {
  return !(currentValue % 3);
});
// console.log(numbers);
console.log(result);

//when find index not find result alwaeyes (-1)

var numbers = [250, 231, 258, 369, 147, 789, 321, 654, 159, 456];
var sum = numbers.find((cv) => {
  return cv % 2;
});
console.log(sum);
