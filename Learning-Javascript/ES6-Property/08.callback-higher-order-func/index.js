//
const taskOne = () => {
  console.log("task -1 ");
};

const taskTwo = () => {
  setTimeout(() => {
    console.log("task -2. Data Loading ");
  }, 3000);
};
const taskThree = () => {
  console.log("task -3 ");
};
const taskFour = () => {
  console.log("task -4 ");
};
const taskFive = () => {
  console.log("task -5 ");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
