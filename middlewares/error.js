const CustomError = require('../errors/customError.js');


const errorHandler = (err, req, res, next) => {
    // if (err instanceof CustomError) {}

    return res.status(500).json({
        error: 'Something went wrong, try again later'
    });
}

module.exports = errorHandler;