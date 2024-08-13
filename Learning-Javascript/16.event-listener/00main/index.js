//single elements

document.querySelector("button").addEventListener("click", rana);

function rana() {
  alert("hellow everyone");
}

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
  myVar.classList.add("my-style");
});

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseout", function () {
  myVar.classList.remove("my-style");
});

//multriple elements

var len = document.querySelectorAll(".myButton").length; //for total lenghth

//for re use this loop
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".myButton")[i].addEventListener("click"),
    () => {
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " is clicked";
    };
}
