const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'school' property when called with the 'new' keyword", () => {
      const intern = new Intern();

      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("email" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    });
  });

  describe("getSchool", () => {
    it("should return the 'school' property when called with the 'new' keyword and passed a 'school' property", () => {
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const school = "Order of Wizards";

      const intern = new Intern(name, id, email, school);

      expect(intern.getSchool()).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should return the role as an 'Intern' when called with 'new' keyword", () => {
      const intern = new Intern();

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
