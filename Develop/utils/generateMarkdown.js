

//renders license badge with link to more information about each license
const renderLicenseBadge = license => {
  console.log(license)
  let licenseBadges = [];
  if (license.includes('Apache License 2.0')) {
    licenseBadges += 
    '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } if (license.includes('GNU AGPLv3')) {
    licenseBadges += 
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  }
   if (license.includes('MIT')) {
  licenseBadges += 
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license.includes('ISC')) {
    licenseBadges += 
    '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
  

  if (!license.length) {
    return '';
  } else {
  return licenseBadges;
  }
}

//Generates README
const generateMarkdown = newData => {
  return `
  # ${renderLicenseBadge(newData.license)}
  # ${newData.projectName}

  ## Project Description 
  ${newData.description}

  ## Table of Contents
  - [Instillation](#Instillation-for-use)
  - [Instructions](#Instructions-of-use)
  - [License](#License)
  - [Contributors](#Contributors) 
  - [Test](#Test) 
  - [Contact information](#Contact-information-for-questions)

  ## Instillation for use
  ${newData.installation}

  ## Instructions of use
  ${newData.usage}

  ## License
  ${newData.license}

  ## Contributors
  ${newData.contributors}

  ## Test 
  ${newData.tests}

  ## Questions 
  For any questions regarding this project please contact me at the following email: ${newData.questions}
  View my Github at the following link for more projects https://github.com/${newData.github}
`;
}

module.exports = generateMarkdown;
