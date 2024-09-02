/*
- Day 12: Asynchronous JavaScript
  - setTimeout, setInterval
  - Introduction to Callbacks
*/
/*
// set time out
const myObj = {
  name: "rana",
  villlage: "choto sultanpur",
};

setTimeout(() => {
  console.log(myObj);
}, 5000);

// set interval
setInterval(() => {
  console.log("This logs every 1 second");
}, 1000);

//clearing timeout
let timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer);

let interval = setInterval(() => {
  console.log("This will run only once");
}, 1000);

setTimeout(() => clearInterval(interval), 1000);
*/
/*
//callback fuction
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("rana is good boy");
}

greet("Rana", sayGoodbye);
*/
//Callbacks in Asynchronous Operations
/*
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("Sample Data");
  }, 2000);
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

fetchData(processData);
*/
// 4. Callback Hell
setTimeout(() => {
  console.log("First task completed");
  setTimeout(() => {
    console.log("Second task completed");
    setTimeout(() => {
      console.log("Third task completed");
    }, 1000);
  }, 1000);
}, 1000);

// advance asnck
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sample Data");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(`Processing: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
