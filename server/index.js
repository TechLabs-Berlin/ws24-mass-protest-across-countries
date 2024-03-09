const express = require("express");
const app = express();
const path = require("path");

// Middleware to solve CORS issue:
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  })

// Test server successful connecton:
app.get('/', (req, res) => {
	console.log('Test connection');
	res.send('Server is successfully connected!');
})

// Test API fetching by frontend with random number:
app.get('/api/test', (req, res) => {
	let randomNumber = Math.floor(Math.random() * 100);
	console.log('random number generated is:', randomNumber);
	res.send(randomNumber.toString());
})

// GET api for ProtesList page:
app.get("/api/protests", (req, res) => {
                res.send("Upcoming protests:")
})

app.listen(8000, () => {
    console.log("Server on port 8000")
})