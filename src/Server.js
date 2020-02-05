const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes/Routes');

dotenv.config({ path: '/home/karoline/Documents/karol/projetos/node-server-for-testing/.env' });

const PORT = process.env.PORT || 2001
const server = express()

server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
    console.log(`Service is listening to ${PORT}...`);
    console.log('Press Ctrl+C to quit.');
})
