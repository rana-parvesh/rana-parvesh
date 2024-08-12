/* mouse events - <html>, <head>, <meta>, <title>, <br>, 
 <style> <script>, <ifreame>, <parm>, <base>, <bdo>

 {not work for this items} */

/*
 1. onclick
 2. ondblclick
 3. onmousedown
 4. onmouseup
 5. onmouseenter
 6. onmouseleave
 7. onmousemove
 8. onmouseover
 */
console.clear();
const div = document.querySelector("div");

div.addEventListener("click", (e) => {
  //   console.log("first click");
  //   console.log(e.target.id);
  //   console.log(e.target.className);
  console.log(e.target.innerHTML); // inner text , text content
});

div.addEventListener("dblclick", () => {
  console.log("double click");
});

div.addEventListener("mouseup", () => {
  console.log("mouse also up");
});

div.addEventListener("mousedown", () => {
  console.log("mouse also down");
});

div.addEventListener("mouseenter", () => {
  console.log("mouse also enter");
});

div.addEventListener("mouseleave", () => {
  console.log("mouse also leave");
});

div.addEventListener("mouseover", () => {
  console.log("mouse also over");
});

div.addEventListener("mousemove", (e) => {
  //   console.log("mouse also move");
  console.log("clientX = " + e.clientX + "clientY = " + e.clientY);

  //ANOTHER ofsetX and ofsetY
});

var buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) => {
  button.addEventListener("click", () => {
    console.log("clicked");
  });
});
