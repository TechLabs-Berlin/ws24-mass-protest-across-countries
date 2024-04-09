const mongoose = require("mongoose");
const express = require("express");
const AppError = require("./utils/AppError");
const router = require(("./router"));

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
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // client server = react domain sending requests
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  })

// Middleware to parse JSON requests
app.use(express.json());

// Api route to protests:
app.use("/api", router)

// Test successful server connection:
app.get('/', (req, res) => {
	console.log('Test');
	res.send('Server sucessfully connected!');
})

// Error handling when the api typed isn't found by the server, .all for every request and * for every path:
app.all("*", (req, res, next) => {
    next(new AppError("Server not found", 404))
})

// Default error handler showing when invalid API has been requested:
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Internal server error'";
  res.status(statusCode).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})