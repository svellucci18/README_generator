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
    fs.writeFile(generateMarkdown())
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    // Prompts questions in terminal
    .prompt(questions)

    // Awaits responses in terminal then calls writeFile
    .then((response) => {

    // deconstructs answers into variables
    const { username, email, project, description, license, install, tests, repoUseGuide, contributionGuide } = response;

    fs.writeFile(
        "./new_README/README.md",
`# ${project}
[<img src="https://img.shields.io/badge/license-${license}-COLOR.svg?logo=LOGO">](<https://opensource.org/licenses/${license}>)

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${install}

## Usage
${repoUseGuide}

## License
This application is covered under the ${license} license.

## Contributing
${contributionGuide}

## Tests
In order to run tests, type ${tests} to command line.

## Questions
Contact me ${email}
or [github](<https://github.com/${username}>)
`, 
    (err) =>
        err ? console.error(err) : console.log('Generating README')
    )
   })

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

