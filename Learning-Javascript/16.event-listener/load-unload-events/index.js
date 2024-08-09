//load, unload
//scroll
//resize
// ToggleEvent

/*load, unload
window.addEventListener("load", () => {
  console.log("load");
});

window.addEventListener("unload", () => {
  console.log("unload");
});
*/
// scroll
window.addEventListener("scroll", () => {
  console.log("scroll");
});

// resize
window.addEventListener("resize", () => {
  var width = window.outerWidth;
  var height = window.outerHeight;
  console.log(`height : ${height}, width : ${width}`);
});

//toggols
var details = document.querySelector("details");
details.addEventListener("toggle", () => {
  console.log("toggole");
});
