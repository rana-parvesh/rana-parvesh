/*
drug events Object

1. ondragstart 
2. ondrag
2. ondragend
2. ondragenter
2. ondragleave
2. ondragover
2. ondrop

*/

var p = document.querySelector("p");
var div = document.querySelector("div");

p.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});
div.addEventListener("dragover", (e) => {
  e.preventDefault();
});
div.addEventListener("drop", (e) => {
  let id = e.dataTransfer.getData("text");
  //   console.log(id);
  div.appendChild(document.getElementById(id));
  e.preventDefault();
});
