const { app } = require('./core');
const { db, update } = require('./db');
const lights = require('./lights');
const fs = require('fs');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


// Tillgång till alla objekt i devices.
const devices = db.get('devices');

// Router till alla lampor.
app.use('/lights', lights)


//Olika get requests för övriga saker. 


// Alla är uppbyggda på samma sätt, med en query string med state ON eller OFF. 
app.get('/camera', (req, res) => {

    // Om användaren skriver in state=on 
    if (req.query.state === "on") {

        // Hitta kameran via id, sätt värde True via assign, så den går igång. 
        let camera = devices.find({ id: "CAM1" })
            .assign({ on: true })
            .value()

        //Skicka uppdatering till front-end. 
        update()

        //Skicka svar i Insomnia. 
        res.send(`${camera.type} see you.`)

    }
    // Samma sak här, fast tvärtom bara. 
    else if (req.query.state === "off") {

        let camera = devices.find({ id: "CAM1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${camera.type} cant see.`)
    } else {
        res.send('Err, must be turned ON or OFF')
    }
})


app.get('/vacuum', (req, res) => {

    if (req.query.state === "on") {

        let vacuum = devices.find({ id: "VAC1" })
            .assign({ on: true })
            .value()

        update()
        res.send(`${vacuum.type} is rollin.`)
    } else if (req.query.state === "off") {

        let vacuum = devices.find({ id: "VAC1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${vacuum.type} have parked.`)
    } else {
        res.send('Err, must be turned ON or OFF')
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
        res.send('Try put it DOWN or UP')
    }
})


// Här är den enda som sticker ut. Ska skrivas in med önskad temperatur först. 
app.get('/airco/:number', (req, res) => {

    let temp = req.params.number;

    if (req.query.state === "on") {

        let ac = devices.find({ id: "AC1" })
            .assign({ on: true, temperature: temp })
            .value()

        update()
        res.send(`${ac.type} is now flowing at ${temp} degrees`)
    } else if (req.query.state === "off") {

        let ac = devices.find({ id: "AC1" })
            .assign({ on: false })
            .value()

        update()
        res.send(`${ac.type} is off`)
    } else {
        res.send('You have to turn the AC on or off, at desired temperature.')
    }
})


app.get('/speakers/:id/stream', (req, res) => {

    if (req.query.state === "on") {

        let id = req.params.id;


        const audioFile = fs.createReadStream('./db/audio/testfile.mp3');

        audioFile.pipe(res);

        let player = devices.find({ id: id })
            .assign({ on: true })
            .value();

        update();


        res.send(`Music makes the people come together. ${player.type} is rockin.`)
    } else if (req.query.state === "off") {
        let id = req.params.id;

        let player = devices.find({ id: id })
            .assign({ on: false })
            .value();

        update();

        res.send(`${player.type} has died.`)
    }
})





