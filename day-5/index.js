/*
- Day 5: Loops
  - For loop, While loop, Do-while loop
  - Break এবং Continue
*/
// for (let i = 0; i < 5; i++) {
//   console.log("Iteration number: " + i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // Exit the loop when i equals 5
//   }
//   console.log(i);
// }
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop when i equals 5
  }
  console.log(i);
}
