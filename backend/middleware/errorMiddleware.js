const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (error, req, res, next) => {
    let status = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message;

    if (error.name === 'CastError' && error.kind === 'objectId'){
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(status).json({
        message,
        stack: process.env.NODE_ENV ==='production' ? null : error.stack
    })
}

export { notFound, errorHandler };