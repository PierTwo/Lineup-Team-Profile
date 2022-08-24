// Import the Employee class
const Employee = require("../lib/Employee");

// Tests for the Employee class
describe("Employee", () => {
  // Test for the initialization of the class
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
      // Initalize a new Employee object
      const employee = new Employee();

      // Verify that name, id, and email properties initialized properly
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
  });

  // Test for the getName method
  describe("getName", () => {
    it("should return the 'name' property when called with the 'new' keyword and passed a 'name' property", () => {
      // Set the values for the argument to be passed to the class object instance
      const name = "Gandalf";

      // Initialize a new Employee object with the arguments that have been passed to it
      const employee = new Employee(name);

      // Verify that the getName method is returning the same value as the name variable
      expect(employee.getName()).toEqual(name);
    });
  });

  // Test for the getId method
  describe("getId", () => {
    it("should return the 'id' property when called with the 'new' keyword and passed an 'id' property", () => {
      // Set the values for the arguments to be passed to the class object instance
      const name = "Gandalf";
      const id = 2;

      // Initialize a new Employee object with the arguments that have been passed to it
      const employee = new Employee(name, id);

      // Verify that the getId method is returning the same value as the id variable
      expect(employee.getId()).toEqual(id);
    });
  });

  // Test for the getEmail method
  describe("getEmail", () => {
    it("should return the 'email' property when called with the 'new' keyword and passed an 'email' property", () => {
      // Set the values for the arguments to be passed to the class object instance
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";

      // Initialize a new Employee object with the arguments that have been passed to it
      const employee = new Employee(name, id, email);

      // Verify that the getEmail method is returning the same value as the email variable
      expect(employee.getEmail()).toEqual(email);
    });
  });

  // Test for the getRole method
  describe("getRole", () => {
    it("should return the role as an 'Employee' when called with 'new' keyword", () => {
      // Initialize a new Employee object
      const employee = new Employee();

      // Verify that the getRole method returns the proper role
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
