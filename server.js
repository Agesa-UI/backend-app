import router from './routes';

const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
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
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.listen(PORT, () => {
  dbConnect();
  console.log(`Server running on port ${PORT}`);
});
