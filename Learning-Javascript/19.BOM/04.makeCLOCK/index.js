// make a clock

var btn = document.querySelector(".btn");
var messege = document.querySelector(".messege");

btn.addEventListener("click", clock);
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minites = date.getMinutes();
  let seconds = date.getSeconds();
  minites = formatTime(minites);
  seconds = formatTime(seconds);

  let time = hours + ":" + minites + ":" + seconds;
  console.log(time);
  messege.textContent = time;
  setInterval(clock, 1000);
}
function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
