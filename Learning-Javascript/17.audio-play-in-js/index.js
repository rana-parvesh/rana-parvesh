var len = document.querySelectorAll(".my-button").length;

for (var i = 0; i < len; i++) {
  document
    .querySelectorAll(".my-button")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      play(text);
    });
}

function play(text) {
  switch (text) {
    case "Button-A":
      var audioA = new Audio("A.mp3");
      audioA.play();
      break;

    case "Button-B":
      var audioB = new Audio("B.mp3");
      audioB.play();
      break;

    case "Button-C":
      var audioC = new Audio("C.mp3");
      audioC.play();
      break;
  }
}
