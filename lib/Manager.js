// Import the Employee class
const Employee = require("./Employee");

// Manager class that is a child of the Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Method to return the officeNumber argument
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method to return the role as 'Manager'
  getRole() {
    return "Manager";
  }
}

// Modularize and export the Manager class
module.exports = Manager;
