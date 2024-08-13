/* BOM (browser object model)
1. window object
2. location object
*/

console.clear();
/*
// console.log(window.location); //window was global
//href
console.log(location.href);
//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);
//pathname
console.log(location.pathname);
*/

var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.host;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;

var button = document.getElementById("visit-button");
button.addEventListener("click", () => {
  location.assign("https://github.com/");
});
