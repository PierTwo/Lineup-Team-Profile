const fs = require("fs");

function writeToFile(htmlData) {
  // fs.readFile("./dist/index.html", "utf8", (err, data) => {
  //   if (err) {
  //     return console.error(err);
  //   } else {
  //     const htmlResult = data.replace(
  //       /\<div class="d-none"><\/div>/g,
  //       htmlData + `<div class="d-none"></div>`
  //     );
  //     fs.writeFile("./dist/index.html", htmlResult, "utf8", (err) => {
  //       return err
  //         ? console.error(err)
  //         : console.log("Succesfully added team member!");
  //     });
  //   }
  // });
  fs.writeFile("./dist/index.html", htmlData, "utf8", (err) => {
    return err
      ? console.error(err)
      : console.log("Succesfully created your team lineup!");
  });
}

module.exports = writeToFile;
