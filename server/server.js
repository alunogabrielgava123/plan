const WebDocs = require('./socket');
const mongoose = require('mongoose');
const io = require('socket.io')(3001, {
    cors: {
        origin: '*',
        methodos: ['GET', 'POST']
    }
});

mongoose.connect('mongodb://localhost/plan-docs').catch((e)=>{
    console.log(e);
});
//Connection with server;
io.on('connection', (socket) => WebDocs(socket));

