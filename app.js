const express = require('express');
const helloRoute = require('./routes/routes.js');
const errorHandler = require('./middlewares/error.js');


const app = express();

app.use('/', helloRoute);
app.use(errorHandler);

module.exports = app;