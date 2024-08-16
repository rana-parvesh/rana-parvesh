//arrey.prototype.arrey reduce()

var numbers = [10, 20, 24, 36, 41];

//its find the cummulaitive value
// its not change the main arrey
var result = numbers.reduce((pre, curr, currentIndex, arr) => {
  return pre + curr;
}, 0);
console.log(result);
