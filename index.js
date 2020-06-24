//requiring all the needed packages and dependencies
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs").promises;

//creating the questions to be asked when creating your readMe document
const questions = [
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
];

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

const writeToFile = async (fileName, data) => {
  const content = genMarkdown(data);
  await fs.writeFile(fileName, content);
};

async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    await writeToFile("README.md", userInput);
  } catch (err) {
    console.log(err);
  }
}

init();
