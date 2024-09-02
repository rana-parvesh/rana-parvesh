/* 
-Day 15: ES6+ Features
  - Let and Const, Template literals
  - Destructuring, Spread/rest operator
  - Default parameters
  */
/*
//use let
{
  let person = {
    name: "rana parvesh",
    family: {
      father: "kalim uddin ",
      mother: "parul begum",
    },
    marks: [56, 85, 96, 75, 36],
  };
  let {
    family: { father: x },
  } = person;
  document.write(x);
}

{
  //use const
  const rana = [85, 46, 85, 36, 465, 45, 63];
  const bithi = [85, 46, 85, 36, 465, 45, 63];
  var result = [...rana, ...bithi];
  document.write(result);
}
*/
// use the rest operator
// rest  operatoe alwayees use to the last elements dont show the prebius elements

function myFunc(a, ...params) {
  // console.log(a);
  console.log(params);
}
myFunc(250, 26, 65, 10, 454, 93, 48);
