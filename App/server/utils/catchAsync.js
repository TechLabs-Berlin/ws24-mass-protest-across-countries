// Middleware to handle asynchronous functions and catch errors
const catchAsync = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(next)
    }
}

module.exports = catchAsync;