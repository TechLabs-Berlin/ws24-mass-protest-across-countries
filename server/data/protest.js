const fs = require('fs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/fm-protest");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// Define schema
const protestSchema = new Schema({
    event_date: Date,
    year: Number,
    event_type: String,
    mood: String,
    district: String,
    source: String,
    categories: String,
    description: String,
    crowd_size: String,
    longitude: Number,
    latitude: Number,
    imageUrl: String,
  });
  
// Create model and export:
module.exports = mongoose.model('Protest', protestSchema);