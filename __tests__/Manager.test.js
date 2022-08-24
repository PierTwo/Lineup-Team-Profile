// Import the Manager class
const Manager = require("../lib/Manager");

// Tests for the Manager class
describe("Manager", () => {
  // Test for the initialization of the class
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'officeNumber' property when called with the 'new' keyword", () => {
      // Initalize a new Manager object
      const manager = new Manager();

      // Verify that name, id, email, and officeNumber properties initialized properly
      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
    });
  });

  // Test for the getOfficeNumber method
  describe("getOfficeNumber", () => {
    it("should return the 'officeNumber' property when called with the 'new' keyword and passed an 'officeNumber' property", () => {
      // Set the values for the arguments to be passed to the class object instance
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const officeNumber = 1;

      // Initialize a new Manager object with the arguments that have been passed to it
      const manager = new Manager(name, id, email, officeNumber);

      // Verify that the getOfficeNumber method is returning the same value as the officeNumber variable
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  // Test for the getRole method
  describe("getRole", () => {
    it("should return the role as a 'Manager' when called with 'new' keyword", () => {
      // Initialize a new Manager object
      const manager = new Manager();

      // Verify that the getRole method returns the proper role
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
