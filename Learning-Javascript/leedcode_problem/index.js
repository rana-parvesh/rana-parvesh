/*Example :

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4*/
function createCounter(init) {
  let current = init;

  return {
    increment: () => ++current,
    reset: () => (current = init),
    decrement: () => --current,
  };
}

// Example usage:
const init = 5;
const calls = ["increment", "reset", "decrement"];
const counter = createCounter(init);

const results = calls.map((method) => counter[method]());

console.log(results); // Output: [6, 5, 4]
