const mongoose = require('mongoose');

// Define a schema for the data
const coursesSchema = new mongoose.Schema({
  name: String,
  description: String,
});
