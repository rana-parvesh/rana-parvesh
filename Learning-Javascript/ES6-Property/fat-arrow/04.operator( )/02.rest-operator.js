//use arguments
function myFunc() {
  console.log(arguments);
}
myFunc(5, 6, 5, 10, 54, 3, 8);

// use the rest operator
// rest  operatoe alwayees use to the last elements dont show the prebius elements

function myFunc(a, ...params) {
  console.log(a);
  console.log(params);
}
myFunc(250, 26, 65, 10, 454, 93, 48);
