const axios = require('axios');

const createConfig = (method, url, data = null) => ({
  method,
  url,
  data,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.TOKEN}`,
    'Cookie': process.env.CSRF_COOKIE,
  }
});

module.exports = createConfig;
