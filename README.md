# test-automation-project
Prerequisites

•	Node.js and npm installed

•	Cypress installed (npm install cypress --save-dev)

1. Running One File

To run a single Cypress test file:

Using CLI:

1.	Open a terminal and navigate to your project directory.
2.	Run Cypress with the specific test file:
   
npx cypress run --spec "cypress/integration/test_file1.spec.js"

2. Running Few Files
   
To run a few specific Cypress test files:

Using CLI:

1.	Open a terminal and navigate to your project directory.
2.	Run Cypress with the specific test files (use comma to separate multiple files):
   
npx cypress run --spec "cypress/integration/test_file1.spec.js,cypress/integration/test_file2.spec.js"

4. Running One Test
   
To run a single test within a Cypress test file, you can use the .only method to focus on a specific test.

Example:

describe('My Test Suite', () => { it.only('running this test only', () => { // test code });

Then, run the test file using the CLI:

npx cypress run --spec "cypress/integration/test_file1.spec.js"

6. Running Few Tests
   
To run a few specific tests within a Cypress test file, use the .only method on those tests.

Example:

describe('My Test Suite', () => { it.only('runs this test', () => { // test code }); 

it.only('runs this test too', () => { // test code }); 

it('this test will be skipped', () => { // test code }); });


Then, run the test file using the CLI:

npx cypress run --spec "cypress/integration/your_test_file.spec.js"

7. Running in Headless Mode
   
Cypress runs in headless mode by default when using the npx cypress run command.

To run Cypress in headless mode:

1.	Open a terminal and navigate to your project directory.
2.	Run Cypress:
   
npx cypress run --spec "cypress/integration/your_test_file.spec.js"
npx cypress run --spec "cypress/integration/your_test_file.spec.js"

8. Running in Non-Headless Mode

To run Cypress in non-headless (interactive) mode, use the open command:

Using CLI:

1.	Open a terminal and navigate to your project directory.
2.	Run Cypress in interactive mode:
npx cypress open
3.	In the Cypress Test Runner that opens, click on the specific test file you want to run.

Summary of Commands

•	Run one file: npx cypress run --spec "cypress/integration/your_test_file.spec.js"

•	Run few files: npx cypress run --spec "cypress/integration/test_file1.spec.js,cypress/integration/test_file2.spec.js"

•	Run one test: Use .only method on the test, then run the file.

•	Run few tests: Use .only method on those tests, then run the file.

•	Run in headless mode: npx cypress run

•	Run in non-headless mode: npx cypress open
