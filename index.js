// Imports Inquirer to ask the prompts
const inquirer = require("inquirer");

// Imports the classes need for the app
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Imports the generateHTML function
const generateHTML = require("./src/generateHTML");

// Function to initialize the app and ask if the user want to use continue with the app
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
      // Uses the ternary operator to check if the greeting response was truthy or true, if so call the mainPrompts function, otherwise log 'Goodbye!' to the console and finish running the app
      response.greeting ? mainPrompts() : console.log("Goodbye!");
    });
}

// Function to ask the main prompts of the app for the employee's info
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
      // Use a switch statement to call the relevant role prompt function based on the role chosen by the user
      switch (response.role) {
        // If the Manager role was chosen...
        case "Manager":
          // Call the managerPrompt function and pass it the inquirer responses
          managerPrompt(response);
          break;

        // If the Engineer role was chosen...
        case "Engineer":
          // Call the engineerPrompt function and pass it the inquirer responses
          engineerPrompt(response);
          break;

        // If the Intern role was chosen...
        case "Intern":
          // Call the internPrompt function and pass it the inquirer responses
          internPrompt(response);
          break;

        default:
          break;
      }
    });
}

// Function to ask the prompt for the manager role
function managerPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    })
    .then((response) => {
      // Create a new object using the Manager class with the name, id, and email from the data passed to the function and the office number from the inquirer response
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        response.officeNumber
      );
      // Call the addAnotherPrompt function with the manager object passed to it
      addAnotherPrompt(manager);
    });
}

// Function to ask the prompt for the engineer role
function engineerPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "gitHub",
    })
    .then((response) => {
      // Create a new object using the Engineer class with the name, id, and email using the data passed to the function and the GitHub username from the inquirer response
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        response.gitHub
      );
      // Call the addAnotherPrompt function with the engineer object passed to it
      addAnotherPrompt(engineer);
    });
}

// Function to ask the prompt for the intern role
function internPrompt(data) {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the intern's school?",
      name: "school",
    })
    .then((response) => {
      // Create a new object using the Intern class with the name, id, and email using the data passed to the function and the school from the inquirer response
      const intern = new Intern(
        data.name,
        data.id,
        data.email,
        response.school
      );
      // Call the addAnotherPrompt function with the intern object passed to it
      addAnotherPrompt(intern);
    });
}

// Function to prompt the user if they would like to add another employee
function addAnotherPrompt(data) {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "addEmployee",
    })
    .then((response) => {
      // If the response to add another employee is true...
      if (response.addEmployee) {
        // Call the generateHTML function and pass it the object data passed to the function and the value of the addEmployee response
        generateHTML(data, response.addEmployee);
        // Call mainPrompts to ask the employee info prompts again for the next employee
        mainPrompts();
      } else {
        // Otherwise only call the generateHTML function and pass it the object data passed to the function and the value of the addEmployee response
        generateHTML(data, response.addEmployee);
      }
    });
}

// Calls the init function to initialize the app
init();
