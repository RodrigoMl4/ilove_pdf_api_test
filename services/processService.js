const axios = require('axios');
const createConfig = require('../config/axiosConfig');
require('dotenv').config({ path: './.env' });


const processFile = async () => {
  try {
    const data = {
      task: process.env.TASK,
      tool: process.env.TOOL,
      files: [
        {
          server_filename: process.env.SERVER_FILENAME,
          filename: 'testpdf.pdf'
        }
      ]
    };

    const url = `https://${process.env.SERVER}/v1/process`;

    const config = createConfig('post', url, data);

    const response = await axios.request(config);

    return response;
  } catch (error) {
    console.error('Error during file processing:', error.response ? error.response.data : error.message);
    return { error: error.message };
  }
};

processFile();

module.exports = { processFile };
