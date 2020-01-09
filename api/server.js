const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//import all routers here:

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const strainRouter = require('../strain/strain-router.js');
const noteRouter = require('../note/note_router.js');



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/strain', strainRouter);
server.use('/api/note', noteRouter)


server.get('/', (req, res) => {
    res.send("MedCabinet Is Open!");
});


module.exports = server;