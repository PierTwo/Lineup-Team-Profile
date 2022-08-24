class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  getRoleIcon() {
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

module.exports = Employee;
