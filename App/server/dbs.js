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

// Call and await the defined insertion functions
async function insertData() {
  await insertPastProtest();
  // await insertFutureProtest();
}

// Array to store used image URLs
const usedUrls = [];

// Function to fetch a unique image URL from Unsplash
async function fetchUniqueUnsplashImage() {
  try {
      let imageUrl;
      do {
          const response = await axios.get("https://source.unsplash.com/random/300x300/?protest");
          imageUrl = response.request.res.responseUrl; // Extracting the final redirected URL
      } while (usedUrls.includes(imageUrl)); // Ensure URL is unique
      return imageUrl;
  } catch (error) {
      console.error('Error fetching image:', error);
      return null;
  }
}

// Read JSON file and insert data into MongoDB for past protests
async function insertPastProtest() {
  try {
      // Delete all existing protests
      await Protest.deleteMany({});
      console.log("Deleted previously inserted past protests.");

      const pastData = fs.readFileSync('./data/past-protest.json', 'utf8');
      const jsonPastData = JSON.parse(pastData);
      
      // Fetch unique image URLs for each protest
      const pastProtestsWithImages = await Promise.all(jsonPastData.map(async (protestData) => {
          const imageUrl = await fetchUniqueUnsplashImage();
          return { ...protestData, imageUrl };
      }));

      // Insert data into MongoDB
      const result = await Protest.insertMany(pastProtestsWithImages);
      console.log('Past protests data inserted successfully:', result);
  } catch (err) {
      console.error('Error inserting past protests data:', err);
  }
}

// // Read JSON file and insert data into MongoDB for future protests
// async function insertFutureProtest() {
//     try {
//         const futData = fs.readFileSync('./data/future-protest.json', 'utf8');
//         const jsonFutData = JSON.parse(futData);
      
//         // Fetch unique image URLs for each protest
//         const futProtestsWithImages = await Promise.all(jsonFutData.map(async (protestData) => {
//             const imageUrl = await fetchUniqueUnsplashImage();
//             return { ...protestData, imageUrl };
//         }));

//         // Insert data into MongoDB
//         const result = await Protest.insertMany(futProtestsWithImages);
//         console.log('Future protests data inserted successfully:', result);
//     } catch (err) {
//         console.error('Error inserting future protests data:', err);
//     } finally {
//         // Close MongoDB connection
//         mongoose.disconnect();
//     }
// }