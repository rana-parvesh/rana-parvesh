/*
clipboard events objects

// oncopy
//oncut
//on paste
*/

var input = document.querySelector("input");
var p = document.querySelector("p");

input.addEventListener("copy", () => {
  p.innerText = "i have copied the text";
  console.log("i have copy text");
});

input.addEventListener("cut", () => {
  p.innerText = "i have cut the text";
  console.log("i have cut text");
});

input.addEventListener("paste", () => {
  p.innerText = "i have paste the text";
  console.log("i have paste text");
});
