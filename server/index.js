const mongoose = require("mongoose");
const express = require("express");
const ExpressError = require("./utils/ExpressError");
const getProtest = require("./utils/api");

// Connect to MongoDB:
mongoose.connect("mongodb://localhost:27017/fm-protest");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

// Middleware to solve CORS issue:
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  })

// Test server successful connecton:
app.get('/', (req, res) => {
	console.log('Test connection');
	res.send('Server connected!');
})

// Test api fetching by frontend with random number:
app.get('/api/test', (req, res) => {
	let randomNumber = Math.floor(Math.random() * 100);
	console.log(`Your random number is: ${randomNumber}`);
	res.send(randomNumber.toString());
})

// GET api for ProtesList page:
app.get("/api/protests", getProtest)

// Error handling middleware:
app.all("*", (req, res, next) => {
    next(new ExpressError("Server not found!", 404))
})

// Default error handler:
app.use((err, req, res) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Something went Wrong!"
    res.status(statusCode).render("error", { err })
})

app.listen(8000, () => {
    console.log("Server on port 8000")
})