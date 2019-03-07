const {spawn} = require('child_process')
const process = spawn('python3', ['hello-world.py', 'torri'])

process.stdout.on('data', (data) => {
    console.log(data.toString('utf-8'))
})