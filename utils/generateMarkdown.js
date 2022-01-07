// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != "") {
    return `
[<img src="https://img.shields.io/badge/license-${license}-COLOR.svg?logo=LOGO">](<https://opensource.org/licenses/${license}>)`
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (license != "") {
    return `
* [License](#license)`
  } else {
    return ""
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   
  if (license != "") {
    return `  
## License
This application is covered under the ${license} license.`
  } else {
    return ""
  }
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.repoUseGuide}

${renderLicenseSection(data.license)}

## Contributing
${data.contributionGuide}

## Tests
In order to run tests, type ${data.tests} to command line.

## Questions
Contact me ${data.email}
or [github](<https://github.com/${data.username}>)
`;
}

module.exports = generateMarkdown;
