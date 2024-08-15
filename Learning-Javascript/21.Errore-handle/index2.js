// errore handaling -> try,catch, finaly
//the throw statement -> create custome errore

document.querySelector("#check").addEventListener("click", function () {
  var num = document.querySelector("#rana").value;

  try {
    if (num < 5) {
      throw "input is too low";
    } else if (num > 10) {
      throw "number is too high";
    }
  } catch (err) {
    console.log(err);
  }
});
