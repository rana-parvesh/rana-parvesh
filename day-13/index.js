/*
- Day 13: Promises
  - Promise API (resolve, reject)
  - Chaining promises
  - Async/Await introduction
*/

// crating promis with two paramiter (resolve and reject)
const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
console.log(myPromise);

// promis with then methods
myPromise.then((message) => {
  console.log(message); // Output: "Operation was successful!"
});

// promis with catch methods
myPromise.then((message) => {
  console.log(message); // Output: "Operation was successful!"
});
