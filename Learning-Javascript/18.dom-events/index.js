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
// now learn to chenge event

console.clear();
/*
var input = document.querySelector("input");
input.addEventListener("change", ranaFun);

function ranaFun(e) {
  //   console.log(e.target);
  //   console.log(e.target.className);
  //   console.log(e.target.id);
  console.log(e.target.value);
}
*/

const programs = document.querySelectorAll("input[name = program]");
console.log(programs);

Array.from(programs).map(programs);
