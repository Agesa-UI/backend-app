// App controller
const User = require('../models/UserModel');

const getHome = async (req, res) => {
  res.send('<h1>Hello World</h1>');
};

const getDashboard = async (req, res) => {
  try {
    // Retrieve the user's information from the database
    const user = await User.findById(req.user.id);

    // Render the dashboard template with the user's information
    res.render('dashboard', { user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const getDashboardProfile = async (req, res) => {
  try {
    // Retrieve the user's information from the database
    const user = await User.findById(req.user.id);

    // Render the profile template with the user's information
    res.render('profile', { user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getHome,
  getDashboard,
  getDashboardProfile,
};
