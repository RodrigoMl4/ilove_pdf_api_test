const axios = require('axios');
const createConfig = require('../config/axiosConfig');
require('dotenv').config({ path: './.env' });

const startProcess = async () => {
  try {
    const url = `https://${process.env.FIXED_SERVER}/v1/start/compress`;
    const config = createConfig('get', url);

    const response = await axios.request(config);

    return response;
  } catch (error) {
    console.error('Error during start process:', error.response ? error.response.data : error.message);
    return { error: error.message };
  }
};

startProcess();

module.exports = { startProcess };
