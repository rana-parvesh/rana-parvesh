//js BOM
//popup box - alert, confirm, prompt

// alert("error here");

/* 
confirm
confirm("are you sure?"); //output : yes = true, cancel = false

function rana() {
  let value = confirm("Do you want to delete?");
  if (value) {
    console.log("delete");
  } else {
    console.log("not delete");
  }
}
rana();
*/

//prompt
function message() {
  var h1 = document.createElement("h1");
  let text;

  var name = prompt("Enter your name : ");
  if (name == null || name == "") {
    text = "No name found";
  } else {
    text = "Hellow " + name;
  }
  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}
message();
