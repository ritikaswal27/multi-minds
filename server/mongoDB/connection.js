const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const mongoConnection = () => {
  try {
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Error while connecting mongoDB');
  }
};
module.exports = mongoConnection;
