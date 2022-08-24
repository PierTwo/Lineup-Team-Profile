// Employee class to be used as a template for the various job role classes
class Employee {
  // Constructor method to initialize an object instance with the name, id, and email arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to return the name argument
  getName() {
    return this.name;
  }

  // Method to return the id argument
  getId() {
    return this.id;
  }

  // Method to return the email argument
  getEmail() {
    return this.email;
  }

  // Method to return the job role
  getRole() {
    return "Employee";
  }

  // Method to get a role icon based on the role being returned by the getRole method
  getRoleIcon() {
    // Switch statement to return the correct Font Awesome icon for the role being returned
    switch (this.getRole()) {
      case "Manager":
        return "fa-solid fa-mug-hot";

      case "Engineer":
        return "fa-solid fa-code";

      case "Intern":
        return "fa-solid fa-graduation-cap";

      default:
        break;
    }
  }
}

// Modularize and export the Employee class
module.exports = Employee;
