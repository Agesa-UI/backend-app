require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

const dbConnect = () => {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to database successfully!');
    })
    .catch((err) => {
      console.error(`Error connecting to database ${err}`);
    });
};

module.exports = dbConnect;
