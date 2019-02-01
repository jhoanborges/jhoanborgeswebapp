# Phone Directory

## User Story

### Story Description

The Client has an application to keep their users in an agenda, he realizes they need to add a new field to populate the address of their users, but also the client needs a much simpler way to edit the fields in the agenda, so we have to implement a new gesture for the edition.  
The QA team found a few defects that need to be fixed along with the new features described by the  PM.

### Feature Description:

- Add a new field called “Address”
- Implement a gesture that do the following:
  - Become editable when double clicked
  - After edited, the information should be saved if the user hits enter.
- Be sure formats on the fields are correct and only valid data can be entered.

### Acceptance Criteria:

- Address field must be added
- Field must contain a gesture that do the following:
  - Become editable when double clicked
  - After edited, the information should be saved if the user hits enter.
- Defects must be fixed
- Application needs to work
- Follow the [contribution](#Contribution) guide

### Considerations:

- You can use any framework or library for the “Views” and modified the code as required.
- You need to fix the existent or new errors
- You can add styling if you believe it would provide a plus

## Contribution

To contribute in this project you need to make a fork of the current repository, in your copy of this project, checkout to develop and create a feature branch like gitflow and start to code.

### Pull Request

Once your feature is finished, merge it into develop and create a Pull Request with a message explaining what your feature does and if is needed install some extra dependencies.

## Installation

### Software requirements

- NodeJS 10.x+ whit NPM
- Modern browser like Chrome, Firefix, etc
- Code Editor

### Steps to mount a development server

1. Install dependencies with NPM or Yarn

```sh
> npm install
or
> yarn
```
2. Start the development server

```
> npm start
or
> yarn start
```
