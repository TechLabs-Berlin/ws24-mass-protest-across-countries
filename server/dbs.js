const fs = require("fs");
const mongoose = require("mongoose");
const Protest = require("./data/protest");

// Connect to MongoDB, insert data after connection:
mongoose.connect("mongodb://localhost:27017/fm-protest");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
    insertData();
});

// Read JSON file
const insertData = async () => {
    try {
        // Read JSON file
        const data = fs.readFileSync('./data/protest.json', 'utf8');
        const jsonData = JSON.parse(data);

        // Insert data into MongoDB
        const result = await Protest.insertMany(jsonData);
        console.log('Data inserted successfully:', result);;
      } catch (err) {
        console.error('Error:', err);
      } finally {
        // Close MongoDB connection
        mongoose.disconnect();
      }
}