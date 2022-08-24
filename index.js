const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message:
          "Welcome to Lineup!\n--------------------\nWould you like to continue?",
        name: "greeting",
      },
    ])
    .then((response) => {
      return response.greeting ? mainPrompts() : console.log("Goodbye!");
    });
}

function mainPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then((response) => {
      switch (response.role) {
        case "Manager":
          managerPrompt(response);
          break;

        case "Engineer":
          engineerPrompt(response);
          break;

        case "Intern":
          internPrompt(response);
          break;

        default:
          break;
      }
    });
}

function managerPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    })
    .then((response) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        response.officeNumber
      );
      return addAnotherPrompt(manager);
    });
}

function engineerPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "gitHub",
    })
    .then((response) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        response.gitHub
      );
      return addAnotherPrompt(engineer);
    });
}

function internPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the intern's school?",
      name: "school",
    })
    .then((response) => {
      const intern = new Intern(
        data.name,
        data.id,
        data.email,
        response.school
      );
      return addAnotherPrompt(intern);
    });
}

async function addAnotherPrompt(data) {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "addEmployee",
    })
    .then((response) => {
      if (response.addEmployee) {
        generateHTML(data, response.addEmployee);
        mainPrompts();
      } else {
        generateHTML(data, response.addEmployee);
      }
    });
}

init();
