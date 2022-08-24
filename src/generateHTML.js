// Imports the writeToFile function
const writeToFile = require("./writeToFile");

// Creates an empty array to be filled with the employee cards
const cardArr = [];

// Function to generate the HTML using argument data passed from the inquirer responses
function generateHTML(data, addEmployee) {
  // String of the required HTML needed to add the cards to
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./reset.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/28d0f4c8d4.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./style.css" />
    <title>My Team Lineup</title>
  </head>

  <body>
    <nav class="navbar col-12 p-4">
      <h1 class="text-light text-center col-12 p-4">
        <span class="fa-solid fa-people-group"></span> My Team Lineup
      </h1>
    </nav>

    <div class="container col-12 mt-5">
      <div class="row justify-content-center">
        `;

  // String of main card HTML with the name, role icon, role, and email data that was passed to the function from the inquirer response
  let cardHTML = `<div class="card col-md-3 m-3 p-0">
          <div class="card-header text-light">
            <h4 class="card-title">${data.getName()}</h4>
            <h5 class="card-subtitle">
              <span class="${data.getRoleIcon()}"></span> ${data.getRole()}
            </h5>
          </div>
          <div class="card-body p-4">
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item">
                <span class="fa-solid fa-id-badge"></span> ID: ${data.getId()}
              </li>
              <li class="list-group-item">
                <span class="fa-solid fa-envelope"></span> Email: 
                <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
              </li>`;

  // Switch statement to add the role specific info based on the role chosen for the employee from the inquirer data passed to the function
  switch (data.getRole()) {
    // If the Manager role was chosen add the office number data
    case "Manager":
      cardHTML += `\n              <li class="list-group-item">
                <span class="fa-solid fa-building"></span> Office Number: ${data.getOfficeNumber()}
              </li>
            </ul>
          </div>
        </div>`;
      break;

    // If the engineer role was chosen add the GitHub username data and use the username to make a link to their profile
    case "Engineer":
      cardHTML += `\n              <li class="list-group-item">
                <span class="fa-brands fa-github"></span> GitHub: 
                <a href="https://github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}</a>
              </li>
            </ul>
          </div>
        </div>`;
      break;

    // If the intern role was chosen add the school data
    case "Intern":
      cardHTML += `\n              <li class="list-group-item">
                <span class="fa-solid fa-school"></span> School: ${data.getSchool()}
              </li>
            </ul>
          </div>
        </div>`;
      break;

    default:
      break;
  }

  // String of closing HTML tags needed to finish the HTML generation
  const closingTags = `\n      </div>
    </div>
  </body>
</html>`;

  // Push the generated card to the cardArr array
  cardArr.push(cardHTML);

  // If the addEmployee argument returns as falsy or false...
  if (!addEmployee) {
    // Then add all the generated HTML together by adding the html variable and the cardArr array
    // and when adding the cardArr array join the array together with a new line between them and the correct amount of indention for the HTML code
    let generatedHTML = html + cardArr.join("\n        ");
    // Add the closing tags to the generated HTML
    generatedHTML += closingTags;

    // Call the writeToFile function with the generatedHTML passed to it
    writeToFile(generatedHTML);
  }
}

// Modularize and export the generateHTML function
module.exports = generateHTML;
