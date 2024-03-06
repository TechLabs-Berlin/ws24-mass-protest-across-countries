const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Define directory where static files will be located:
// app.use("/static", express.static(path.join(__dirname, "public")));

// GET 'index.html'-Homepage from dir 'test-views':
app.get("/", (req, res) => {
    const filePath = path.join(".", "test-views", "index.html")
        fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
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