const axios = require('axios');
const createConfig = require('../config/axiosConfig');
require('dotenv').config({ path: './.env' });


const listTasks = async () => {
  try {
    const url = `https://${process.env.SERVER}/v1/task`;
    const data = JSON.stringify({
      "secret_key": process.env.SECRET_KEY,
      "page": 1
    });

    const config = createConfig('post', url, data);

    const response = await axios.request(config);
    return response;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

listTasks();

module.exports = { listTasks };
