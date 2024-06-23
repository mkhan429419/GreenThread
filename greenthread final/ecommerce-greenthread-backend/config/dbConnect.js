// Import required libraries
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Define the database connection function
const dbConnect = async () => {
  try {
    // Connect to MongoDB using the URL from the environment variable
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
};

// Export the database connection function
module.exports = dbConnect;
