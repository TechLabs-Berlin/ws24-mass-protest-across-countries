const axios = require("axios");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/fm-protest");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// Add Protest model
const Protest = require('./data/protest');

// Function to fetch a unique image URL from Unsplash
const fetchUniqueUnsplashImage = async (usedUrls) => {
    try {
        let imageUrl;
        do {
            const response = await axios.get("https://source.unsplash.com/random/300x300/?protest,berlin");
            imageUrl = response.request.res.responseUrl; // Extracting the final redirected URL
        } while (usedUrls.includes(imageUrl)); // Ensure URL is unique
        return imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}

// Function to update existing Protests objects with unique Unsplash URLs
const updateProtests = async () => {
    const protests = await Protest.find({}); // Retrieve all existing objects
    const usedUrls = protests.map(protest => protest.imageUrl); // Get list of used URLs
    for (const protest of protests) {
        const imageUrl = await fetchUniqueUnsplashImage(usedUrls);
        if (imageUrl) {
            protest.imageUrl = imageUrl;
            await protest.save();
            console.log('Updated object with image URL:', imageUrl);
            usedUrls.push(imageUrl); // Add the new URL to the used URLs list
        }
    }
}

// Call the update function
updateProtests().then(() => {
    console.log('Update completed');
    mongoose.disconnect();
}).catch(error => {
    console.error('Error updating objects:', error);
    mongoose.disconnect();
});
