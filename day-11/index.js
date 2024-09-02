/*
- Day 11: Error Handling
  - Try-catch-finally block
  - Throwing custom errors
  */

// basic errore handaling

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Division operation completed.");
}

// advanced option
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 18) {
    throw new ValidationError("Age must be 18 or older.");
  }
  return "Age is valid.";
}

try {
  let result = validateAge(15);
  console.log(result);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("Other Error:", error.message);
  }
}
