const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Define directory where static files will be located:
app.use("/static", express.static(path.join(__dirname, "public")));

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

// GET 'contact.html'-contact page from dir 'test-views':
app.get("/contact", (req, res) => {
    const filePath = path.join(".", "test-views", "contact.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'about.html'-About Us page from dir 'test-views':
app.get("/about", (req, res) => {
    const filePath = path.join(".", "test-views", "about.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'help.html'-contact page from dir 'test-views':
app.get("/help", (req, res) => {
    const filePath = path.join(".", "test-views", "help.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'login.html'-form from dir 'test-views':
app.get("/login", (req, res) => {
    const filePath = path.join(".", "test-views", "login.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// POST login-request and redirect to index.html in dir 'test-views':
app.post("/", (req, res) => {
    const filePath = path.join(".", "test-views", "index.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send("<h1>YOU ARE LOGGED IN!</h1>")
    });
})

app.listen(3001, () => {
    console.log("FindMyProtest on port 3001")
})