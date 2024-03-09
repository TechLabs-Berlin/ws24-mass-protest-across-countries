const express = require("express");
const app = express();
const path = require("path");

// Test server successful connecton:
app.get('/', (req, res) => {
	console.log('Test connection');
	res.send('Server is successfully connected!');
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