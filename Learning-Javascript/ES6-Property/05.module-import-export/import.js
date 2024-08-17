// file receved here

import { text, setText } from "./export.js";

console.log(text);
setText("hello everyone");
console.log(text);

// Named imports
import { add, subtract } from "./export.js";

// Default import
import multiply from "./export.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15

// combing import
import divide, { PI } from "./export.js";

console.log(PI); // Output: 3.14
console.log(divide(10, 2)); // Output: 5
