const { app } = require('./core');
const { db, update } = require('./db');
const lights = require('./lights');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

const devices = db.get('devices');

app.use('/lights', lights)

app.get('/camera', (req, res) => {

    if (req.query.state === "on") {

        let camera = devices.find({ id: "CAM1" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${camera.type} see you.`)
    } else {

        let camera = devices.find({ id: "CAM1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${camera.type} cant see.`)
    }
})

app.get('/vacuum', (req, res) => {

    if (req.query.state === "on") {

        let vacuum = devices.find({ id: "VAC1" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${vacuum.type} is rollin.`)
    } else {

        let vacuum = devices.find({ id: "VAC1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${vacuum.type} have parked.`)
    }
})


app.get('/blinder', (req, res) => {

    if (req.query.state === "down") {

        let blinder = devices.find({ id: "BLI1" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${blinder.type} are down.`)
    } else if (req.query.state === "up") {

        let blinder = devices.find({ id: "BLI1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${blinder.type} are up..`)
    } else {
        res.send('Try put it down or up')
    }
})

app.get('/airco/:number', (req, res) => {

    console.log(req.params.number)

    let temp = req.params.number;

    if (req.query.state === "on") {

        let ac = devices.find({ id: "AC1" })
            .assign({ on: true, temperature: temp })
            .value()

        update()
        res.send(`${ac.type} is now flowing at ${temp} degrees`)
    } else {

        let ac = devices.find({ id: "AC1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${ac.type} is off`)
    }
})





