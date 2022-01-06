// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'languages',
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
        type: 'input',
        message: "What kind of license should your project have?",
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
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => 
    // Use user feedback for... whatever!!
    fs.appendFile(
        "READMEtest.md",
`# ${response.project}
## ${response.description}
## Table of Contents
\n`, 
    (err) =>
        err ? console.error(err) : console.log('Generating README')
    ))

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();

