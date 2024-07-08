//get elements by id

var head = document.getElementById("head1");
head.innerHTML = "the value was changed";

var head2 = document.getElementsByClassName("head2")[0];
head2.innerHTML = "the value new";

var head3 = document.getElementsByTagName("h2")[0];
head3.innerHTML = "changed the value";

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
}
