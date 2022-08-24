// Imports required module to create the HTML file
const fs = require("fs");

// Creates the HTML file with the HTML data that was passed to the function
function writeToFile(htmlData) {
  // Writes file to the /dist directory with the HTML data passed to the function using UTF-8 character encoding
  fs.writeFile("./dist/index.html", htmlData, "utf8", (err) => {
    // If the err callback is truthy then write the error to the console. Otherwise log that the file was sucessfully created
    return err
      ? console.error(err)
      : console.log("Succesfully created your team lineup to /dist/index.html");
  });
}

// Modularize and export the writeToFile function
module.exports = writeToFile;
