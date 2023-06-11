const { Router } = require('express');


const helloRoute = Router();

helloRoute.get('/', (req, res) => {
    res.status(200).send('<h1>Olá Mundo!</h1>');
});

module.exports = helloRoute;