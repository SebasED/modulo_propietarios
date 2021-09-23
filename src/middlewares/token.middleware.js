const axios = require('axios');
const config = require('../config');

const verifyToken = async (req, res, next) => {
  try {
    const { data } = await axios.get(config.SECURITY_MODULE, {
      headers: {
        Authorization: `${req.headers.authorization}`,
      },
    });
    req.userdata = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = verifyToken;
