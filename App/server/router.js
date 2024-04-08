const express = require("express");
const router = express.Router();
const validateSearchterm = require("./Joi");
const getProtest = require("./utils/GetProtest");
const searchProtest = require("./utils/SearchProtest");
const catchAsync = require("./utils/CatchAsync");
const AppError = require('./utils/AppError');

// Api to test server-client connection:
router.get('/test', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log('Random number generated is:', randomNumber);
    res.send(randomNumber.toString());
});

// Api to serve client ProtestPage:
router.get("/protest", catchAsync(async (req, res, next) => {
    console.log('Request received for ProtestPage');
    await getProtest(req, res);
}));

// Api to serve client SearchBar:
router.get("/search", validateSearchterm, catchAsync(async (req, res, next) => {
    console.log('Request received for SearchBar');
    await searchProtest(req, res);
}));

module.exports = router;