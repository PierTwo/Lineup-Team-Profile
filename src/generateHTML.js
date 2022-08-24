const writeToFile = require("./writeToFile");

const cardArr = [];

function generateHTML(data, addEmployee) {
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
                <a href="${data.getEmail()}">${data.getEmail()}</a>
              </li>`;

  switch (data.getRole()) {
    case "Manager":
      cardHTML += `\n              <li class="list-group-item">
                <span class="fa-solid fa-building"></span> Office Number: ${data.getOfficeNumber()}
              </li>
            </ul>
          </div>
        </div>`;
      break;

    case "Engineer":
      cardHTML += `\n              <li class="list-group-item">
                <span class="fa-brands fa-github"></span> GitHub: 
                <a href="https://github.com/${data.getGitHub()}">${data.getGitHub()}</a>
              </li>
            </ul>
          </div>
        </div>`;
      break;

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

  const closingTags = `\n      </div>
    </div>
  </body>
</html>`;

  cardArr.push(cardHTML);

  if (!addEmployee) {
    let generatedHTML = html + cardArr.join("\n        ");
    generatedHTML += closingTags;
    writeToFile(generatedHTML);
  }
}

module.exports = generateHTML;
