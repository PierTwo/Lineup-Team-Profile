const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'gitHub' property when called with the 'new' keyword", () => {
      const engineer = new Engineer();

      expect("name" in engineer).toEqual(true);
      expect("id" in engineer).toEqual(true);
      expect("email" in engineer).toEqual(true);
      expect("gitHub" in engineer).toEqual(true);
    });
  });

  describe("getGitHub", () => {
    it("should return the 'gitHub' property when called with the 'new' keyword and passed an 'gitHub' property", () => {
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const gitHub = "GandalfTheGrey";

      const engineer = new Engineer(name, id, email, gitHub);

      expect(engineer.getGitHub()).toEqual(gitHub);
    });
  });

  describe("getRole", () => {
    it("should return the role as a 'Engineer' when called with 'new' keyword", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
