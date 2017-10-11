# Horizon

## Getting started
1. Install the latest stable node.js
2. Install git
3. Clone repository through ssh
    1. Generate ssh key with git bash
    2. Add the content of the generated public key to [your ssh keys](https://thomasjuhasz.visualstudio.com/_details/security/keys)
    2. Go to the [code tab](https://thomasjuhasz.visualstudio.com/_git/Horizon) of the project and on the top right click "Clone"
    3. Switch to ssh and use that URL to clone the repository in your CLI tool / IDE
    ```bash
    git clone ssh://<username>@thomasjuhasz.visualstudio.com:22/_git/Horizon
    ```
  
4. Install angular-cli globally for easier usage
    ```bash
    npm install -g @angular/cli
    ```
5. Navigate to the repository's folder and run :
    ```bash
    npm install
    ```
6. To run the app on a local webpack dev server  run:
    ```bash
    npm start / ng serve
    ```
7. See the working app on `http://localhost:4200/`

## Development server
The base url of the API is configurable via the setting the "apiBaseUrl" in the Configuration.ts (in the root of the project).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# i18n

## Adding a language

1. Add a new `lang-XX.ts` file to src/i18n
2. Add the new language in the `translations.ts` in the same folder
3. Add a new flag into `assets/flags/XX.svg`. You can easily find a flag for your new language [here](https://github.com/lipis/flag-icon-css/tree/master/flags/4x3).
4. Update the language selector with the new language in `header.component.ts`
5. If you also need a language specific stylesheet -hungarian is the base- add it to the i18n/lang-XX.less and import it in the styles.less file