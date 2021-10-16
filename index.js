// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title'
            message: 'Please input the title of the project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a brief description of your project.',
        },
        {
           type: 'input',
           name: 'usage',
           message: 'What is your projects use in the real world?', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the correct licensing for your project: ',
            choices: [
                'Apache',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
          type: 'input',
          name: 'contributions',
          message: 'Are there any contributors to the project?',  
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any tests included with the project?', 
        },
        {
            type: 'input',
            name: 'issues',
            message: 'What is the proper etiquette for reporting issues?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: ',
        }
    ]);
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
