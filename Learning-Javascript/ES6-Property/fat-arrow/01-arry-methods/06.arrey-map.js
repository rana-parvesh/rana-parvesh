//arrey.prototype.find

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.map((num) => {
  return 2 * num;
});
console.log(result);

//its not change the main arrey

var rana = [4, 8, 3, 4, 6];
var sum = rana.map((r) => {
  return r * 2;
});

console.log(sum);
