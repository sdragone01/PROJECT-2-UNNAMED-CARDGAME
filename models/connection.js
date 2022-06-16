require("dotenv").config()
const mongoose = require("mongoose")



/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////








const MONGODB_URI = process.env.MONGODB_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(MONGODB_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Could not connect to MongoDB!", err);
});
  module.exports = mongoose;