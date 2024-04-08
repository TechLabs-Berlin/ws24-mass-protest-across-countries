const Joi = require('joi');
const AppError = require("./utils/AppError");

// Validation schema for searchterm:
const searchtermSchema = Joi.object({
    searchterm: Joi.alternatives().try(
        Joi.string().trim().required().label("Search term"), 
        Joi.number().integer().required().label("Search term")
    )
});

// Middleware to validate search term with validation schema:
const validateSearchterm = (req, res, next) => {
    const { error } = searchtermSchema.validate(req.query);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new AppError(msg, 400);
    } else {
        next();
    }
}

module.exports = validateSearchterm;