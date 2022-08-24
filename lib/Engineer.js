// Import the Employee class
const Employee = require("./Employee");

// Engineer class that is a child of the Employee class
class Engineer extends Employee {
  // Contructor Method to initialize the object instance with the name, id, email, and gitHub arguments
  constructor(name, id, email, gitHub) {
    // super to access the parent class constructor method
    super(name, id, email);
    this.gitHub = gitHub;
  }

  // Method to return the gitHub argument
  getGitHub() {
    return this.gitHub;
  }

  // Method to return the role as 'Engineer'
  getRole() {
    return "Engineer";
  }
}

// Modularize and export the Engineer class
module.exports = Engineer;
