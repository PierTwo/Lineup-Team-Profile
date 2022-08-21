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
}

const name = "Gandalf";
const id = 2;
const email = "gandalf@middle-earth.com";

const employee = new Employee(name, id, email);

console.log(employee.getRole());
module.exports = Employee;
