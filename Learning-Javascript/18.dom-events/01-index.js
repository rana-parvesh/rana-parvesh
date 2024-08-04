//DOM Events
/* 1. events object
        --events type : change , submit, load , unload, open , play ,
         canplay , progress, pause, playing,ended , resize,
         scroll, toggle, etc
         

         
2. mouse event object
3. kyboard evemt object
4. focous event object
5. clipboard event object
6. drug event object
*/

/* firsy of all event object 

<input/> - text number, password, email, color, reedio
checkbox, serch, time, datatime , week , mounth, url,
tel, file
// <select>
//<textarea>
*/
// now learn to change event

console.clear();

const inputs = document.querySelectorAll("input[name=program]");
// console.log(inputs);

Array.from(inputs).map((inputs) => {
  inputs.addEventListener("change", programHandler);
});

function programHandler(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}

// input.addEventListener("change", ranaFun);

// function ranaFun(e) {
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log(e.target.id);
// console.log(e.target.value);
// }
