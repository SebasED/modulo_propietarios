const mongoose = require('mongoose');
const config = require('./config');

const conexionDB = async () => {
  try {
    const DB = await mongoose.connect(config.MONGODB_URI);
    console.log('Db ', DB.connection.name, ' is connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = conexionDB;
