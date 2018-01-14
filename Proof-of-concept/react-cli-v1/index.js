#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
    let success = await createReactApp()
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
        return false;
    }
    await cdIntoNewApp()
    console.log("All done")
}
const createReactApp = () => {
    return new Promise(resolve => {
        if (appName) {
            shell.exec(`create-react-app ${appName}`, (stdout) => {
                console.log('stdout: ' + stdout);
                console.log("Created react app".green)
                resolve(true)
            })
        } else {
            console.log("\nNo app name was provided.".red)
            console.log("\nProvide an app name in the following format: ")
            console.log("\ncreate-nick-react ", "app-name\n".cyan)
            resolve(false)
        }
    })
}
const cdIntoNewApp = () => {
    return new Promise(resolve => {
        shell.exec(`cd ${appName}`, () => {
            resolve()
        })
    })
}
run()
