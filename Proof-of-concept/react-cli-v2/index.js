#!/usr/bin/env node

let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs-extra');
let appName = process.argv[2];
let appDirectory = `${process.cwd()}/${appName}`;

const run = async () => {
    let success = await createReactApp();
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
        return false;
    }
    await installPackages();
    await updatePackage_json();
    await generateBoilerplate();
    console.log("All done");
}
const createReactApp = () => {
    return new Promise(resolve => {
        if (appName) {
            console.log("\nCreating react app...".cyan);
            shell.exec(`create-react-app ${appName}`, () => {
                console.log("Finished creating react app".green);
                resolve(true)
            })
        } else {
            console.log("\nNo app name was provided.".red);
            console.log("\nProvide an app name in the following format: ");
            console.log("\ncreate-nick-react ", "app-name\n".cyan);
            resolve(false);
        }
    })
}
const installPackages = () => {
    return new Promise(resolve => {
        console.log("\nInstalling react-router, react-router-dom, react-lazy-route, axios, sass and mobx...".cyan);
        shell.exec(`npm install --save react-router react-router-dom react-lazy-route axios mobx mobx-react node-sass-chokidar npm-run-all`, {cwd: appDirectory}, () => {
            console.log("\nFinished installing packages\n".green);
            resolve()
        });
    });
}
const updatePackage_json = () => {
    let scripts = {
        "build-css": "node-sass-chokidar src/ -o src/",
        "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
        "start-js": "react-scripts start",
        "start": "npm-run-all -p watch-css start-js",
        "build-js": "react-scripts build",
        "build": "npm-run-all build-css build-js",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    };
    return new Promise(resolve => {
        console.log("\nUpdating package.json....".cyan);
        shell.exec(`json -I -f package.json -e 'this.scripts=` + JSON.stringify(scripts) + "'", {cwd: appDirectory}, () => {
            resolve();
        });
    })
}
const generateBoilerplate = () => {
    console.log("\nGenerating boilerplate...".cyan);
    return new Promise(resolve=>{
        fs.unlinkSync(`${appDirectory}/src/App.css`);
        fs.unlinkSync(`${appDirectory}/src/App.js`);
        fs.unlinkSync(`${appDirectory}/src/App.test.js`);
        fs.unlinkSync(`${appDirectory}/src/index.css`);
        fs.unlinkSync(`${appDirectory}/src/logo.svg`);
        fs.copySync('./templates', `${appDirectory}/src`);
        resolve();
    })
}
run()
