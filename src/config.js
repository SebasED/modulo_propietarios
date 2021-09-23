require('dotenv').config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  SECURITY_MODULE: process.env.SECURITY_MODULE,
};
