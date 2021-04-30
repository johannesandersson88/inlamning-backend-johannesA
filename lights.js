const { Router } = require('express');
const lights = new Router();
const { db, update } = require('./db');

const devices = db.get('devices');






// Uppbyggda på samma sätt som i Index.js. Kollar query state, beroende på värde ändrar man on till true eller false. 
lights.get('/bedroom', (req, res) => {

    if (req.query.state === "on") {

        let lightOne = devices.find({ id: "LIG1" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${lightOne.type} is on.`)
    } else {

        let lightOne = devices.find({ id: "LIG1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${lightOne.type} is off.`)
    }
})

lights.get('/livingroom', (req, res) => {

    if (req.query.state === "on") {

        let lightTwo = devices.find({ id: "LIG2" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${lightTwo.type} is on.`)
    } else {

        let lightTwo = devices.find({ id: "LIG2" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${lightTwo.type} is off.`)
    }
})

lights.get('/garden', (req, res) => {

    if (req.query.state === "on") {

        let lightThree = devices.find({ id: "LIG3" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${lightThree.type} is on.`)
    } else {

        let lightThree = devices.find({ id: "LIG3" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${lightThree.type} is off.`)
    }
})

// Sätter igång alla lampor i olika färger, annars uppbyggd på samma sätt som övriga. 

lights.get('/christmas', (req, res) => {

    if (req.query.state === "on") {
        let lightThree = devices.find({ id: "LIG3" })
            .assign({ on: true, color: "#FF0000" })
            .value()

        update()

        let lightTwo = devices.find({ id: "LIG2" })
            .assign({ on: true, color: "#228B22" })
            .value()

        update()

        let lightOne = devices.find({ id: "LIG1" })
            .assign({ on: true, color: "#1E90FF" })
            .value()

        update()
        res.send(`${lightThree.type} and ${lightTwo.type} and ${lightOne.type} is on`)
    } else {
        let lightThree = devices.find({ id: "LIG3" })
            .assign({ on: false, color: "#FF0000" })
            .value()

        update()

        let lightTwo = devices.find({ id: "LIG2" })
            .assign({ on: false, color: "#228B22" })
            .value()

        update()

        let lightOne = devices.find({ id: "LIG1" })
            .assign({ on: false, color: "#1E90FF" })
            .value()

        update()
        res.send(`${lightThree.type} and ${lightTwo.type} and ${lightOne.type} is off`)
    }



})

// Exporterar för att användas i Index.js
module.exports = lights;


