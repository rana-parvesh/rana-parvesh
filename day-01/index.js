// Constructor to initialize instance variables
/*
class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary < 0 ? 0 : salary; // Ensure salary is not negative
  }

  // Getter for firstName
  getFirstName() {
    return this.firstName;
  }

  // Setter for firstName
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  // Getter for lastName
  getLastName() {
    return this.lastName;
  }

  // Setter for lastName
  setLastName(lastName) {
    this.lastName = lastName;
  }

  // Getter for salary
  getSalary() {
    return this.salary;
  }

  // Setter for salary with negative salary check
  setSalary(salary) {
    this.salary = salary < 0 ? 0 : salary;
  }

  // Method to calculate annual salary
  getAnnualSalary() {
    return this.salary * 12;
  }
}

// Function to test the Employee class
function employeeTest() {
  // Create three instances of Employee
  const emp1 = new Employee("rana", "parvesh", 3000);
  const emp2 = new Employee("bristy", "roy", 4500);
  const emp3 = new Employee("shoron", "hossain", -1500); // Testing negative salary
  console.log(
    `${emp1.getFirstName()} ${emp1.getLastName()}'s Annual Salary: $${emp1.getAnnualSalary()}`
  );
  console.log(
    `${emp2.getFirstName()} ${emp2.getLastName()}'s Annual Salary: $${emp2.getAnnualSalary()}`
  );
  console.log(
    `${emp3.getFirstName()} ${emp3.getLastName()}'s Annual Salary: $${emp3.getAnnualSalary()}`
  );
}

// Run the test function
employeeTest();
*/
// Add event listener for the Submit button
document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "index2.html"; // Redirect to index2.html
  });
