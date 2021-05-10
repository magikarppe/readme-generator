// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "GPLv2") {
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === "BSD 3-clause") {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else {
      return " "
    }
  }
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license == "none") {
      return "";
    } else {
      return "* [License](#license)"
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "none") {
      return "# License"
    } else {
      return "";
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.titleName}
    ${renderLicenseBadge(data.license)}
    
    # Table of Contents 
    * [Installation](#Installation) 
    * [Usage](#Usage) 
    ${renderLicenseLink(data.license)}
    * [Contributing](#Contribute) 
    * [Testing](#Testing)
    * [Questions](#Questions)
    
    # ${'Description \n' + data.description}
    
    # Installation
     **${data.install}**
  
    # Testing
    **${data.runTest}**
  
    # Contribute
    **${data.contribute}**
  
    # Usage
    **${data.userClone}**
  
    # Questions
    In case of any questions, feel free to reach out to ${data.emailName}
  
  
    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
  
  `;
  }
  
  module.exports = generateMarkdown;
  