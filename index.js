// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What is the description of your project?', 'Please enter your installation instructions:', 'Please provide instructions and examples for use: ', 'Please provide contribution guidelines:', 'Please provide test instructions: ', 'Please choose a license for your application from the list of options below:','Please enter your GitHub Username:','Please enter your email address:'];
let licenseColor = '';

inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contributing',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'tests',
    },
    {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        message: questions[7],
        name: 'gitHub',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    }
  ])
  .then((response) => {

    switch(response.license) {
      case 'Apache License 2.0':
        licenseColor = 'blue';
        break;
      case 'GNU General Public License v3.0':
        licenseColor = 'green';
        break;
      case 'MIT License':
        licenseColor = 'orange';
        break;
      case 'BSD 2-Clause "Simplified" License':
        licenseColor = 'lightblue';
        break;
      case 'BSD 3-Clause "New" or "Revised" License':
        licenseColor = 'yellow';
        break;
      case 'Boost Software License':
        licenseColor = 'red';
        break;
      case 'Eclipse Public License 2.0':
        licenseColor = 'purple';
        break;
      case 'Mozilla Public License 2.0':
        licenseColor = 'brightgreen';
        break;
      
      // Add cases for other license options and their respective colors
      default:
        licenseColor = 'blue'; // Default color
    }
    const userTemplate = fillTemplate(response);
    writeToFile(userTemplate);
  });



  

// TODO: Create a function to write README file

function writeToFile(readmeString) {
    console.log(readmeString)
    fs.writeFile('GENERATEDREADME.md', readmeString, (err)=> {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("GENERATEDREADME.md created!");
        }
    });
}

function fillTemplate(response) {
    return  `# <div style="display: flex; justify-content: space-between;"><div>${response.title}</div><div>![License: ${response.license}](https://img.shields.io/badge/License-${response.license.replace(/\s/g, '_')}-${licenseColor})</div></div>
## Description 
${response.description} \n
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation \n
${response.installation} \n
## Usage \n
${response.usage} \n 
## License \n
The application is covered under the ${response.license}. \n
##  Contributing \n
${response.contributing} \n
## Tests \n
${response.tests} \n
## Questions \n
### GitHub Profile: https://github.com/${response.gitHub} \n
### If there are any additional question please email me at: ${response.email}`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


