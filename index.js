//requiring all the needed packages and dependencies
const inquirer = require("inquirer");
// const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const API = require("./utils/API");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a quick description of the project:",
    },
    {
      type: "input",
      name: "table of contents",
      message: "Is their a table of contents for this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of the project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What packages were installed and used for this project?",
    },
    {
      type: "input",
      name: "license",
      message: "What licesnse were used for this project?",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Did anyone else help or contribute to this project? If so please list their github profile:",
    },
    {
      type: "input",
      name: "username",
      message: "What is you username for Github?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then(function (res) {
    console.log(res);
    username = res.username;
    API.getUser(username).then(function (res) {
      console.log(res.data[0].payload.commits[0].author.email);
      const userEmail = res.data[0].payload.commits[0].author.email;
      const user = res.data[0].actor.avatar_url;
      let title = res.title;
      let description = res.description;
      let tableOfContents = res.tableOfContents;
      let usage = res.usage;
      let installation = res.installation;
      let license = res.license;
      let contribution = res.contribution;

      let answer =
        "<b>" +
        "<h1>" +
        title +
        "</h1>" +
        "</b>" +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>Description of Project</h3>" +
        "</b>" +
        "\n" +
        description +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>How to Install</h3>" +
        "</b>" +
        "\n" +
        installation +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>Table of Contents</h3>" +
        "</b>" +
        "\n" +
        "\n" +
        "<ul>" +
        "<li>" +
        tableOfContents +
        "</li>" +
        "\n" +
        "\n" +
        "</ul>" +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>Usage of Project</h3>" +
        "</b>" +
        "\n" +
        usage +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>Licensing</h3>" +
        "</b>" +
        "\n" +
        license +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>Contributors for Project</h3>" +
        "</b>" +
        "\n" +
        contribution +
        "\n" +
        "\n" +
        "<b>" +
        "<h3>For questions contact me here</h3>" +
        "</b>" +
        "\n" +
        userEmail +
        "\n" +
        "\n" +
        "![](" +
        user +
        ")";
      //write response as readme
      fs.writeFile("readMe.md", answer, () => {});
    });
  });

//console logging to make sure I set up questions correctly
//console.log(questions);

//Function for collecting the user input to the read me file
// function writeToFile(fileName, data) {
//   const content = genMarkdown(data);
//   fs.writeFile(fileName, content);
// }

// //Function for pushing the user input to the file
// function init() {
//   try {
//     const userInput = inquirer.prompt(questions);
//     writeToFile("README.md", userInput);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const writeToFile = async (fileName, data) => {
//   const content = genMarkdown(data);
//   await fs.writeFile(fileName, content);
// };

// async function init() {
//   try {
//     const userInput = await inquirer.prompt(questions);
//     await writeToFile("README.md", userInput);
//   } catch (err) {
//     console.log(err);
//   }
// }
