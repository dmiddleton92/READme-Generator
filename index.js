// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
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
                name: 'installation',
                message: "Please provide installation instructions for your project:",
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instructions and examples for use:',
            },
            {
                type: 'input',
                name: 'contributors',
                message: 'Please provide your contributors names:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'repo',
                message: 'What is your GitHub repo name?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'Please provide how to run your tests',
            }

        ])
        .then((data) => {
            const filename = `./Output/${data.title.toLowerCase().split(' ').join('')}.md`;
            writeToFile(filename, data);
        });
}

// Function call to initialize app
init();
