const express = require('express');
const socket = require('socket.io')

let app = express()
let server = app.listen(3000)

app.use(express.static('public'));

console.log("Server is up and running.")

let io = socket(server)
io.sockets.on('connection', newConnection)

function newConnection(socket) {
    console.log('Connection: ' + socket.id)
    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data)
        console.log(data)
    }
}