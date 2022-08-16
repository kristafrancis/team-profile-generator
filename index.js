const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const geerateSite = require('./dist/generate-site.js');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve_(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const prompManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log('Please enter your name!');
                }
            }

        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumer',
        message: 'Enter your office number (Required)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your office number!');
                return false;
            }
        }
    },
    ]).then(answer => {
        console.log(answers);
        const manager = new Manager(answer.name, answer.employeeId, answer.email, answer.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};