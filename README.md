# Test App Galen Automation

This repository contains an automated testing framework coded with JavaScript and using a testing framework Cypress for frontend and for the backend piece, Postman exported collection executed with Newman CLI. The goal is to present this project as part of the QA Onboarding Challenge, and the main pourpose is to display good practices, coding standards, and understanding technologies and tools usage.


# Prerequisites
* Node
* npm
* Cypress

# Setup

1. Clone the repository 
2. Execute `npm install`
3. Install Cypress via npm `npm install cypress --save-dev`

# FrontEnd Automation Tasks:

- [ ] Successful login. Define a test case that performs a successful login, using credentials stored preferably in a .env file
- [ ] Unsuccessful login. Define multiple negative scenarios for login.
- [ ] Create a new task. Create a new task and validate it was created correctly
- [ ] Create 10 new tasks. Create 10 new tasks and validate they were created correctly. Task Names should be dynamical.

# Dependencies 

* **cypress:** Testing Framework
* **cypress-mochawesome-reporter:** FrontEnd results reporting
* **newman:** CLI for executing postman collection.
* **newman-reporter-htmlextra:** Backend results reporting

# Scripts to execute in headless mode different scenarios:

* **Run all tests with Electron (default) browser and recording the final results in Cypress Dashboard:** `project: "cypress run --record"`
* **Run the test for Creatin New Notes with chrome browser:** `notes: "cypress run --spec cypress/integration/examples/CreateNewNoteTests.spec.js --browser chrome"`
* **Run the Login test with Chrome browser:** `login: "cypress run --spec cypress/integration/examples/LoginTest.spec.js --browser chrome"`

*To run these scripts on the terminal start typing "npm run" before the script name*

# BackEnd Automation Tasks:

1. Get your authorization token and save it as an environment variable

2. Create a new folder inside your collection for projects and another one for tasks.

3. Create the following endpoints and its corresponding Tests: status codes, content, json schema,response time, etc.
    - **a) Projects**
      - Get all projects
      - Create a new project
      - Get a project
      - Update a project
      - Delete a project
      
    - **b) Tasks:**
      - Get active tasks
      - Create a new task
      - Get an active task
      - Update a task
      - Close a task
      - Reopen a task
      - Delete a task
      
4. Create Negative scenarios for each endpoint

5. Integrate Newman, so you can run your tests from the command line


# CI/CD Tool
## **GitHub Actions**
