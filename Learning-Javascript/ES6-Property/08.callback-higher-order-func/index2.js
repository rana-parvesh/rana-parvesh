//
// callback and higher order function
/*
function square(x) {
  console.log(`square of ${x}: ${x * x}`);
}
square(5);

// const y = square;
// y(6);

function higherOrderFunction(num, callback) {
  callback(num);
}
higherOrderFunction(8, square);
*/

//
const taskOne = (callback) => {
  console.log("task -1 ");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task -2. Data Loading ");
    callback();
  }, 3000);
};
const taskThree = (callback) => {
  console.log("task -3 ");
  callback();
};
const taskFour = (callback) => {
  console.log("task -4 ");
  callback();
};
const taskFive = () => {
  console.log("task -5 ");
};

taskOne(function f1() {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});

document.querySelector("button").addEventListener("click", () => {
  console.log("save the note");
});
