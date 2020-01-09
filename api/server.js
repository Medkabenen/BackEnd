const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


//import all routers here:
const restRouter = require('../auth/restricted-middleware');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const strainRouter = require('../strain/strain-router.js');
const noteRouter = require('../note/note_router.js');



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', restRouter, usersRouter);
server.use('/api/strain', restRouter, strainRouter);
server.use('/api/note', restRouter, noteRouter)


server.get('/', (req, res) => {
    res.send("MedCabinet Is Open!");
});


module.exports = server;