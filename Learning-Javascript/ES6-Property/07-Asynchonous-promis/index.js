//synchronous programming -> synchonous mean ekta task sesh howar por onno ekti task a move korbe
const taskOne = () => {
  console.log("task -1 ");
};
const dataLoading = () => {
  console.log("task -2. Data Loading "); // here is the asynchnous methods
};
const taskTwo = () => {
  setTimeout(dataLoading, 3000);
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
