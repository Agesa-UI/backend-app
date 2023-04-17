// App controller

const getHome = async (req, res) => {
  res.send('<h1>Hello World</h1>');
};

const getDashboard = async (req, res) => {
  res.json({ message: 'Welcome to Your Dashboard' });
};

module.exports = {
  getHome,
  getDashboard,
};
