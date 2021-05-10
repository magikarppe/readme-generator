// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === "MIT") {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "IBM 1.0") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else {
    return "";
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  View the live application [here](${data.link}).

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Testing](#Testing)
  * [Questions](#Questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license} license. 

  ## Contributions
  ${data.contribute}

  ## Testing
  ${data.tests}

  ## Questions
  If you have any questions about this project, feel free to contact me directly at ${data.email} or simply open an issue. To see more of my work, visit my GitHub profile at [${data.username}](https://github.com/magikarppe/).
`;
}

module.exports = generateMarkdown;
