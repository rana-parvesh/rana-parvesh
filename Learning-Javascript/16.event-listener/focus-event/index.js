/* focous events- object
// <br>, <head>, <titla>, <html>, <ifream>, <meta>, <parm>, <script>, <style>, 
<base>,<bdo> 
//{ this is not for work on focous events}

 1. onblur
 2. onfocous
 3. on focous on
 4. on focous out
*/

var input = document.querySelector("input");

input.addEventListener("blur", () => {
  //   console.log("this is the blur events");
  input.style.backgroundColor = "red";
  input.style.padding = "0";
});
input.addEventListener("focus", () => {
  //   console.log("this is the focus events");
  input.style.backgroundColor = "aqua";
  input.style.padding = "2rem";
});
/*
input.addEventListener("focusin", () => {
  console.log("this is the focusin events");
});

input.addEventListener("focusout", () => {
  console.log("this is the focusout events");
});
*/
