//sqrt, absolute,cail,floor, maxumum, minimum, round,random, our

var n1 = 56;
var n2 = 901;
var maximum = Math.max(n1, n2);
console.log(maximum);

//guesssing game

var numberOfWon = 0;
var numberOfLost = 0;

for (var i = 0; i < 5; i++) {
  var guesssingNumber = parseInt(prompt("emter your guessing number"));
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guesssingNumber == randomNumber) {
    document.write("you have won", "<br>");
    numberOfWon++;
  } else {
    document.write(
      " you lost the game. the random number was = ",
      randomNumber,
      "<br>"
    );
    numberOfLost++;
  }
}
document.write("totel number of won =", numberOfWon, "<br>    ");
document.write("totel number of lost =", numberOfLost, "<br>");
