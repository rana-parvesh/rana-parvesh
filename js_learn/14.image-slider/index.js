var photos = ["image/1.png", "image/2.jpg", "image/3.jpg"];

var imgTag = document.querySelector("img");
var count = 0;

function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
function prev() {
  count--;
  if (count < photos.length) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
