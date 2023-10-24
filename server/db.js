const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURI = "mongodb://mongo:27017/test"

mongoose.set("strictQuery", false);

// Create a function to establish the Mongoose connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Export the connectToDatabase function
module.exports = {connectToDatabase, mongoose};


