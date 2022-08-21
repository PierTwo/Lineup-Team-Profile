const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
      const employee = new Employee();

      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return the 'name' property when called with the 'new' keyword and passed a 'name' property", () => {
      const name = "Gandalf";

      const employee = new Employee(name);

      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the 'id' property when called with the 'new' keyword and passed an 'id' property", () => {
      const name = "Gandalf";
      const id = 2;

      const employee = new Employee(name, id);

      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the 'email' property when called with the 'new' keyword and passed an 'email' property", () => {
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";

      const employee = new Employee(name, id, email);

      expect(employee.getEmail()).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return the role as an 'Employee' when called with 'new' keyword", () => {
      const employee = new Employee();

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
