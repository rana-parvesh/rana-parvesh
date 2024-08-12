/*
kyboards events objects

 1. kydown - press a key , can reapat
02. keypress (may not supported by some browser)
03. keyup 

 some properties - key , keycode,code, shiftkey, ctlkey, reapeat
*/

var textArea = document.querySelector("textArea");
/*
textArea.addEventListener("keydown", () => {
  console.log("this is the keydown property");
});

textArea.addEventListener("keypress", () => {
  console.log("this is the keypress property");
});

textArea.addEventListener("keyup", (e) => {
  console.log(e.key); //keycode
});
*/
textArea.addEventListener("keyup", (e) => {
  if (e.shiftKey) {
    //or use reapeat
    console.log("shift+" + e.key);
  }
});
