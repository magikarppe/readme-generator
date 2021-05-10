// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [   
{type: 'input',
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
  message: 'What is the name of your project?',
  name: 'name',
},
{
  type: 'input',
  message: 'Write a short description of your project:',
  name: 'description',
},
{
  type: 'input',
  message: 'Please enter the link to your deployed project:',
  name: 'link',
},
{
  type: 'list',
  message: 'What kind of license should your project have',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'IBM 1.0', 'None'],
  name: 'license',
},
{
  type: 'input',
  message: 'What command should be run to install dependencies?',
  default: 'npm i',
  name: 'install',
},
{
  type: 'input',
  message: 'What command should be run to run tests?',
  default: 'npm test',
  name: 'tests',
},

{
  type: 'input',
  message: 'What does the user need to know about using your repository?',
  name: 'usage',
},

{
  type: 'input',
  message: 'What does the user need to know about contributing to your repository?',
  name: 'contribute',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log ('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
 console.log(data);
 let responses = markdown(data);
 writeToFile("README.md", responses);
  })
}
// Function call to initialize app
init();
