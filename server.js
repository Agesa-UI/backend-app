const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
