// introduction of arrey
// arrey is a container of a example:

var container = ["beef", "vegetable", "fruits", "others"];

console.log(container);

//arrey expleain

var container = ["beef", "vegetable", "fruits", "others"];

console.log(container[3]);

container[4] = "rana";
console.log(container[4]); //actual number
console.log(container.length); // this is know the number of iten

//define the last elements

var lastElements = container.length - 1;
console.log(container[lastElements]);

//advance of arrye elements

// this is the arrey

var arrey = ["rana ", "shoron ", "zimu ", "raihan ", " hasi"];

// for new variable
arrey.push("muna");
arrey.push("phota");
arrey.push("ayon");
document.write(arrey, "<br>");
document.write(arrey.length, "<br>");
document.write(arrey[5], "<br>");

// for remove a varaiable

arrey.pop();
document.write(arrey, "<br>");

// arrey concuting

var n1 = [" hellow bangladesh  ", " how are you"];
var n2 = [" hellow pakistan  ", " how are you"];
var n = n1.concat(n2);
document.write(n);

// use arry for loop

var num = [25, 36, 47, 89, 65];
var sum = 0;

for (var i = 0; i <= 4; i++) {
  document.write(num[i], "<br>");
  sum = sum + num[i];
}
document.write("the value of sum = ", sum, "<br>");

// user input
var num = new Array();
for (var i = 0; i < 5; i++) {
  num[i] = parseInt(prompt("enter your numbers : "));
}
var sum = 0;

for (var i = 0; i <= 4; i++) {
  document.write(num[i], "<br>");
  sum = sum + num[i];
}
document.write("the value of sum = ", sum, "<br>");

//some arrey method

//push , pop, concut, shift , unshift ,splice,slice,short method

var names = ["rana", "shoron", "raihan", "taniya"];

console.log(names);
names.push("hena");
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift("parvesh");
console.log(names);

names.splice(3, 0, "rabbbi", "sumaiya");
console.log(names);

slice;

var newArrey = names.slice(1);
console.log(newArrey);

//short method (alphabet)
names.sort();
console.log(names);
names.reverse();
console.log(names);

//sorting the number

var numbers = [25, 2, 0, 91, 98, 35, 42, 12];
numbers.sort(function (a, b) {
  return a - b; //for the sort reversm (b- a)
});
console.log(numbers);

// arrey dimantion

function highestScore(scores) {
  var max = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
    }
  }
  return max;
}
var Scores = [89, 45, 96, 56, 78, 95, 65, 36, 75, 85, 94, 75, 98];
var maxscore = highestScore(scores);
document.write(maxscore);

// task --9

//2D arrey
//create a function called topScorer that will
//recived a 2d arrey called player Info
// based on hghest score , return the name of the player

function topScorer(platersInfo) {
  document.write(platersInfo);
}
var players = [
  ["rana", 99],
  ["shoron", 78],
  ["muna", 56],
  ["hasi", 89],
];
