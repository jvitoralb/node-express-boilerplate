require('dotenv').config();

const http = require('node:http');
const app = require('./app.js');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});