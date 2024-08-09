// audio / video events
// canplay, play, playing, pause, progress, ended, vullume change, wating

var video = document.querySelector("video");
video.addEventListener("canplay", function () {
  console.log("canplay");
});

video.addEventListener("play", function () {
  console.log("play");
});

video.addEventListener("pause", function () {
  console.log("pause");
});

video.addEventListener("playing", function () {
  console.log("playing");
});

video.addEventListener("ended", function () {
  console.log("thanks for watching");
});

video.addEventListener("volumechange", function () {
  console.log("change the vollume");
});
