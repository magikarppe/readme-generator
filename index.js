// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
// const { log } = require("console");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'titleName',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?',
        default: 'magikarppe',
    },
    {
        type: 'input',
        name: 'emailName',
        message: 'What is your email?',
        default: 'tgdmattos@gmail.com'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'none'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What commands to install dependencies?',
        default: ['npm i'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about project.',
    },
    {
        type: 'input',
        name: 'runTest',
        message: 'What commands to run tests?',
        default: ['npm test'],
    },
    {
        type: 'input',
        name: 'userClone',
        message: 'What user needs to know for using repo?',
        default: ['git clone'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What user needs to know to contribute to the repo?',
        default: ['Create pull request'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success")); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        let answers = markdown(data);
        console.log("This is the template" + answers);
        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();