const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);

socket.on('chat message', (text) => {
  const message = new Message({
    userId: socket.userId,
    text,
  });
  message.save().then(() => {
    io.emit('chat message', {
      userId: socket.userId,
      text,
      timestamp: message.timestamp,
    });
  });
});
