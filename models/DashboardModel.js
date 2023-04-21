const mongoose = require('mongoose');

// Define a schema for the data
const dashboardSchema = new mongoose.Schema({
  name: String,
  description: String,
  courses: String,
});

const Dashboard = mongoose.Schema('Dashboard', dashboardSchema);

module.exports = Dashboard;
