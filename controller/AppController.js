// App controller

const getHome = async (req, res) => {
  res.send('<h1>Hello World</h1>');
};

module.exports = {
  getHome,
};
