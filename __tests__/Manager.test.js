const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object with a 'name', 'id', 'email', and 'officeNumber' property when called with the 'new' keyword", () => {
      const manager = new Manager();

      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the 'officeNumber' property when called with the 'new' keyword and passed an 'officeNumber' property", () => {
      const name = "Gandalf";
      const id = 2;
      const email = "gandalf@middle-earth.com";
      const officeNumber = 1;

      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.getOfficeNumber()).toEqual(1);
    });
  });

  describe("getRole", () => {
    it("should return the role as a 'Manager' when called with 'new' keyword", () => {
      const manager = new Manager();

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
