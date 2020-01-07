const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//import all routers here:
// const authenticate = require('../auth/auth-middleware.js');
// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send("MedCabinet Is Open!");
});


module.exports = server;