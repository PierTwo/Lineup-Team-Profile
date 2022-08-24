// Import the Engineer class
const Engineer = require("../lib/Engineer");

// Tests for the Engineer class
describe("Engineer", () => {
  // Test for the initialization of the class
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'gitHub' property when called with the 'new' keyword", () => {
      // Initalize a new Engineer object
      const engineer = new Engineer();

      // Verify that name, id, email, and gitHub properties initialized properly
      expect("name" in engineer).toEqual(true);
      expect("id" in engineer).toEqual(true);
      expect("email" in engineer).toEqual(true);
      expect("gitHub" in engineer).toEqual(true);
    });
  });

  // Test for the getGitHub method
  describe("getGitHub", () => {
    it("should return the 'gitHub' property when called with the 'new' keyword and passed a 'gitHub' property", () => {
      // Set the values for the arguments to be passed to the class object instance
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const gitHub = "GandalfTheGrey";

      // Initialize a new Engineer object with the arguments that have been passed to it
      const engineer = new Engineer(name, id, email, gitHub);

      // Verify that the getGitHub method is returning the same value as the gitHub variable
      expect(engineer.getGitHub()).toEqual(gitHub);
    });
  });

  // Test for the getRole method
  describe("getRole", () => {
    it("should return the role as an 'Engineer' when called with 'new' keyword", () => {
      // Initialize a new Engineer object
      const engineer = new Engineer();

      // Verify that the getRole method returns the proper role
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
