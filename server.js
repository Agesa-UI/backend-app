import router from './routes';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/', router);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server running on port ${PORT}`);
});
