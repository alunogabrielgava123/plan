const WebDocs = require('./socket');
const mongoose = require('mongoose');
const io = require('socket.io')(3001, {
    cors: {
        origin: '*',
        methodos: ['GET', 'POST']
    }
});

mongoose.connect('mongodb+srv://gavinha17:gavinha17@cluster0.w7sjeud.mongodb.net/?retryWrites=true&w=majority').catch((e)=>{
    console.log(e);
});
//Connection with server;
io.on('connection', (socket) => WebDocs(socket));

