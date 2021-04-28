const { Router } = require('express');
const lights = new Router();
const { db, update } = require('./db');

const devices = db.get('devices');

lights.get('/bedroom/on', (req, res) => {

    let lightOne = devices.find({ id: "LIG1" }).assign({ on: true }).value()

    update()

    res.send(`Lampan med namn ${lightOne.name} har tänts!`)
})

lights.get('/bedroom/off', (req, res) => {

    let lightOne = devices.find({ id: "LIG1" })
        .assign({ on: false })
        .value()
    update()

    res.send(`Lampan med namn ${lightOne.name} har släckts!`)
})

lights.get('/lights/livingroom/on', (req, res) => {
    let hela = devices.find({ id: "LIG2" })
        .assign({ on: true })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har tänts!`)
})

lights.get('/lights/livingroom/off', (req, res) => {

    let hela = devices.find({ id: "LIG2" })
        .assign({ on: false })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har släckts!`)
})

lights.get('/lights/garden/on', (req, res) => {

    let hela = devices.find({ id: "LIG3" })
        .assign({ on: true })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har tänts!`)
})

lights.get('/lights/garden/off', (req, res) => {

    let hela = devices.find({ id: "LIG3" })
        .assign({ on: false })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har släckts!`)
})

module.exports = lights;


