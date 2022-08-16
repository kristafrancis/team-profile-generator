const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site.js');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
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
                    return false;
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
        name: 'officeNumber',
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

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select option you would like to continue with:',
            choices: ['add engineer', 'add intern', 'finished building team']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
                case "add an intern":
                    promptIntern();
                    break;
                    default:
                        buildTeam();

        }
    });
};

const promptEngineer = () => {
    console.log(`
    ===================
    Add a new Engineer
    ===================
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }else {
                    console.log('Please enter your engineers name!');
                    return false;
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
        name: 'github',
        message: 'Enter your GitHub username (Required)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }
]).then(answer => {
    console.log(answers);
    const engineer = new Engineer(answer.name, answer.employeeId, answer.email, answer.github);
    teamMembers.push(engineer);
    promptMenu();
})
};

const promptIntern = () => {
    console.log(`
    ===================
    Add a new Intern
    ===================
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your interns name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                }else {
                    console.log('Please enter your interns name!');
                    return false;
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
        name: 'school',
        message: 'Enter your school name. (Required)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your school name!');
                return false;
            }
        }
    }
]).then(answer => {
    console.log(answers);
    const Intern = new Intern(answer.name, answer.employeeId, answer.email, answer.school);
    teamMembers.push(intern);
    promptMenu();
})
};

const buildTeam = () => {
    console.log(`
    ==========================
    Finished building my team!
    ==========================
    `);

    //Code for output diectory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();