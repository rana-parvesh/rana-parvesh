/*Example :

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4*/

function rana(i) {
  let current = i;

  return {
    increment: () => ++current,
    reset: () => (current = i),
    decrement: () => --current,
  };
}
// Example usage:
const i = 5;
const calls = ["increment", "reset", "decrement"];
const counter = rana(i);

const results = calls.map((rcv) => counter[rcv]());
console.log(results); // Output: [6, 5, 4]
