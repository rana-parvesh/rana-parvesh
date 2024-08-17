// file sent here

export let text = "Hello, World!";

export function setText(txt) {
  text = txt;
}

// Named export
export function add(a, b) {
  return a + b;
}

// Named export
export function subtract(a, b) {
  return a - b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}

// combing export
export const PI = 3.14;

export default function divide(a, b) {
    return a / b;
}
