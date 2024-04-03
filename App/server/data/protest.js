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
  month: String,
  day: String,
  mood: String,
  district: String,
  source: String,
  category: String,
  label: String,
  title: String,
  description: String,
  notes: String,
  crowd_size_class: Number,
  crowd_size: String,
  imageUrl: String,
});

// Create model + export:
module.exports = mongoose.model('Protest', protestSchema);