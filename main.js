const fs = require('fs')
const path= require('path')
const { Atem } = require('atem-connection')

const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config.json')).toString())
console.log('config', config)

const client = new Atem()
client.on('receivedCommands', msgs => {
    for (const msg of msgs) {
        console.log('received', msg.constructor.name, msg.properties)
    }
})
client.on('connected', () => {
    console.log('>>>>> CONNECTED')
})
client.on('disconnected', () => {
    console.log('>>>>> DISCONNECTED')
})

client.connect(config.host)