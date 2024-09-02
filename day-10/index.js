/*
- Day 10: Events and Event Handling
  - Event types (click, keyup, etc.)
  - Event listeners
  - Event propagation
*/

// click evenst
// const button = document.querySelector(".rana");
// button.addEventListener("click", () => alert("button is clicked"));
//advanced concept
// const myList = document.querySelector(".myList");
// myList.addEventListener("click", (events) => {
//   if (events.target.tagName === "LI") {
//     alert("List item clicked" + events.target.textContent);
//   }
// });

// key press litaners
// const keyup = document.querySelector("#myInput");
// keyup.addEventListener("keyup", (events) =>
//   console.log("key pressed :", events.key)
// );

const list = document.getElementById("todoList");
const button = document.getElementById("addTask");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

button.addEventListener("click", function () {
  const newTask = document.createElement("li");
  newTask.textContent = "New Task";
  list.appendChild(newTask);
});
