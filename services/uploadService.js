const axios = require('axios');
const createConfig = require('../config/axiosConfig');
require('dotenv').config({ path: './.env' });


const uploadFile = async () => {
  try {
    const data = JSON.stringify({
      task: process.env.TASK,
      cloud_file: process.env.CLOUD_FILE
    });

    const config = createConfig('post', `https://${process.env.SERVER}/v1/upload`, data);

    const response = await axios.request(config);

    return response;
  } catch (error) {
    console.error('Error during upload:', error.response ? error.response.data : error.message);
    return { error: error.message };
  }
};

uploadFile();

module.exports = { uploadFile };
