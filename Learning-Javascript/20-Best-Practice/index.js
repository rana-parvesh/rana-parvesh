// Best practice
// 01. use camelCase for naming
(let = firstName), lastName, fullName;

firstName = "rana";
lastName = " parvesh";
console.log(firstName + lastName);

// 02. varible declaration on top and initalize
(let = firstName), lastName, fullName;

// 03. avoid unnecessary varible

fullName = firstName + lastName; //use not best practice
console.log(firstName + lastName); //best practice

// 04. switch , case, default
switch (key) {
  case value:
    break;

  default:
    break;
}

// 05. object and arrey with const
const names = ["rana", "shoron", "raihan"];
names.push("hasi");
console.log(typeof names);

// 06. == vs ===
5 == 5; // output was true
5 == "5"; // output was true and its not fair for us
5 === 5; // output was false

// 07. access dom less
