const { app } = require('./core');
const { db, update } = require('./db');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

const devices = db.get('devices');

app.put('/lights/bedroom/on', (req, res) => {

    let hela = devices.find({ id: "LIG1" }).assign({ on: true }).value()

    update()

    res.send(`Lampan med namn ${hela.name} har tänts!`)
})

app.put('/lights/bedroom/off', (req, res) => {

    let hela = devices.find({ id: "LIG1" })
        .assign({ on: false })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har släckts!`)
})

app.get('/lights/livingroom/on', (req, res) => {
    let hela = devices.find({ id: "LIG2" })
        .assign({ on: true })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har tänts!`)
})

app.get('/lights/livingroom/off', (req, res) => {

    let hela = devices.find({ id: "LIG2" })
        .assign({ on: false })
        .value()
    update()

    res.send(`Lampan med namn ${hela.name} har släckts!`)
})

app.get('/lol/:id', (req, res) => {
    let id = req.params.id
    let hala = devices.find({ id: id }).assign({ on: true }).value();
    update()
    res.send(hala)
})
