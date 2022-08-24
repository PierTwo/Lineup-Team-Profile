// Import the Employee class
const Employee = require("./Employee");

// Intern class that is a child of the Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Method to return the school argument
  getSchool() {
    return this.school;
  }

  // Method to return the role as 'Intern'
  getRole() {
    return "Intern";
  }
}

// Modularize and export the Intern class
module.exports = Intern;
