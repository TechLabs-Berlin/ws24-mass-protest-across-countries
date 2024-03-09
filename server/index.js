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

// GET 'protests.html'-actual/past protests list page from dir 'test-views':
app.get("/protests", (req, res) => {
        const filePath = path.join(".", "test-views", "protests.html")
        fs.readFile(filePath, 'utf8',
            function(err, data) {   
                res.send(data)
        });
})

app.listen(8000, () => {
    console.log("Server on port 8000")
})