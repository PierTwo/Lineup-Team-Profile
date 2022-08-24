// Import the Intern class
const Intern = require("../lib/Intern");

// Tests for the Intern class
describe("Intern", () => {
  // Test for the initialization of the class
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'school' property when called with the 'new' keyword", () => {
      // Initalize a new Intern object
      const intern = new Intern();

      // Verify that name, id, email, and school properties initialized properly
      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("email" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    });
  });

  // Test for the getSchool method
  describe("getSchool", () => {
    it("should return the 'school' property when called with the 'new' keyword and passed a 'school' property", () => {
      // Set the values for the arguments to be passed to the class object instance
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const school = "Order of Wizards";

      // Initialize a new Intern object with the arguments that have been passed to it
      const intern = new Intern(name, id, email, school);

      // Verify that the getSchool method is returning the same value as the school variable
      expect(intern.getSchool()).toEqual(school);
    });
  });

  // Test for the getRole method
  describe("getRole", () => {
    it("should return the role as an 'Intern' when called with 'new' keyword", () => {
      // Initialize a new Intern object
      const intern = new Intern();

      // Verify that the getRole method returns the proper role
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
