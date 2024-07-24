const axios = require('axios');
const createConfig = require('../config/axiosConfig');
require('dotenv').config({ path: './.env' });

const authenticate = async () => {
  try {
    const url = `https://${process.env.FIXED_SERVER}/v1/auth`;

    const config = createConfig('POST', url, {
      public_key: process.env.PUBLIC_KEY
    });

    const response = await axios.request(config);    

    return response;
  } catch (error) {
    console.error('Error during authentication:', error.response ? error.response.data : error.message);
    return { error: error.message };
  }
};

authenticate();

module.exports = { authenticate };
