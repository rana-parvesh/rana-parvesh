//get elements by id

var head = document.getElementById("shoron");
head.innerHTML = "my name is Rana";

var head2 = document.getElementsByClassName("hasi")[0];
head2.innerHTML = "i'm 30 years old";

var head3 = document.getElementsByTagName("h1")[2];
head3.innerHTML = "i'm a student of the bba";
/*
//get element by id
//get elements by class name
//get elements by tag name

//******querry selecctor******
//id
document.querySelector("#name").innerHTML = "i'm rana";
//class
document.querySelector(".address").innerHTML = "i'm from dinajpur";
//tagnae
document.querySelector("h4").innerHTML = "where are you from?";

document.querySelector("a").innerHTML = "new text";
document.querySelector("li a").innerHTML = "learn";
document.querySelector("div a").innerHTML = "new";

// now learn to the onclick method

function myMessage1() {
  document.querySelector("#data").innerHTML = "you have clicked in button 1";
}

function myMessage2() {
  document.querySelector("#data").innerHTML = "you have clicked in button 2";
}

var myVar = document.querySelector("pic");
function myPic1() {
  myVar.src = "image/rana.png";
}*/
