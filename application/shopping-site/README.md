# Prerequisites

Both the CLI and generated project have dependencies that require Node 8.9 or higher, together with NPM 5.5.1 or higher.

# Installation

## Install Globally

`npm install -g @angular/cli`

## Install Locally

`npm install @angular/cli`

To run a locally installed version of the angular-cli, you can call ng commands directly by adding the .bin folder within your local node_modules folder to your PATH. The node_modules and .bin folders are created in the directory where npm install @angular/cli was run upon completion of the install command.

## Install node_module to run the project
Do `npm install` in the folder path where the src folder exist.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
