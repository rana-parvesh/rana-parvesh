/* 1. dom for find or get
2. change
3.add or delete HTML elements

//
DOM Methd = - getElementsById()
DOM properties = innerHTML


var head3 = document.createElement("h1");
var text = document.createTextNode("this is new div");
head3.appendChild(text);

var myDiv = document.getElementById("myDiv");
myDiv.appendChild(head3);

var head2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(head2);*/
