const axios = require('axios');
const createConfig = require('../config/axiosConfig'); 
require('dotenv').config({ path: './.env' });


const download = async () => {
  try {
    const url = `https://${process.env.SERVER}/v1/download/${process.env.TASK}`;
    const config = createConfig('get', url);

    const response = await axios.request(config);
    return response;
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

download();

module.exports = { download };
