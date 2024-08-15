function add() {
  var myVar = document.querySelector("#para");
  myVar.classList.add("#para1");

  myVar.style.color = "red";
  myVar.style.fontSize = "3rem";
  myVar.style.fontWeight = "bold";
  myVar.style.fontStyle = "italic";
}
function remove() {
  var rana = document.querySelector("#para");
  rana.classList.remove("para1");
}
