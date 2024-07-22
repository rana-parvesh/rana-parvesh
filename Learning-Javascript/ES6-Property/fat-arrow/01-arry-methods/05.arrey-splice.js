//arrey.prototype.arrey.splice

var numbers = [1, 2, 3, 4, 5];
// fist 2 is the cut and then 2 index remove and 10, 12 , 14 is new item and index
var result = numbers.splice(1, 2, 10, 12, 14);
console.log(numbers); //its change the main arrey
console.log(result);

//negetive index

var numbers = [1, 2, 3, 4, 5];
// fist 2 is the cut and then 2 index remove and 10, 12 , 14 is new item and index
var result = numbers.splice(-1, 2, 10, 12, 14);
console.log(numbers); //its change the main arrey
console.log(result);
