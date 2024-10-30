// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import { file } from 'tmp';

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'input',
            name: 'Installation',
            message: "Please provide installation instructions for your project:",
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'Repo',
            message: 'What is your GitHub repo name?',
        }

    ])
    .then((data) => {
        const filename = `${data.project.toLowerCase().split(' ').join('')}.md`;
writeToFile(filename, data);
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
