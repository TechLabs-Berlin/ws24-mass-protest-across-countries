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
  event_date: {
    type: Date,
    required: true 
  },
  year: Number,
  month: String,
  day: Number,
  district: String,
  source: String,
  category: String,
  label: String,
  title: String,
  description: String,
  crowd_size: String, 
  crowd_size_name: String,
  isCrowdPredicted: {
    type: Boolean,
    default: false
  },
  imageUrl: String
});

// Create model + export
const Protest = mongoose.model("Protest", protestSchema);

module.exports = Protest;