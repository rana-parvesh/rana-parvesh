// JavaScript: Dynamically Updating Variables
const button = document.getElementById("change-theme");
button.addEventListener("click", () => {
  document.documentElement.style.setProperty("--primary-color", "#8e44ad");
  document.documentElement.style.setProperty("--secondary-color", "#f1c40f");
});
