// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: "What is your project's name?",
        name: 'project',
      },
      {
        type: 'input',
        message: "Please write a short description of your project.",
        name: 'description',
      },
      {
        type: 'checkbox',
        message: "Please should one license your project should have?",
        choices: ['MIT', 'ISC', 'Zlib'],
        name: 'license',
      },
      {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'install',
      },
      {
        type: 'input',
        message: "What command should be run to run tests?",
        name: 'tests',
      },
      {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'repoUseGuide',
      },
      {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributionGuide',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  // file name and data
  fs.writeFileSync(
    path.join("new_README",fileName), data)

}

// TODO: Create a function to initialize app
function init() {
  inquirer
    // Prompts questions in terminal
    .prompt(questions)

    // Awaits responses in terminal then calls writeFile
    .then((response) => {
      writeToFile("README.md", generateMarkdown({...response})) // inquirer generates an object

   })

}

// Function call to initialize app
init();

