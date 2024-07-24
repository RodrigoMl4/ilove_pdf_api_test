const dotenv = require('dotenv');
const path = require('path');

const reloadEnv = () => {
    delete require.cache[require.resolve('dotenv')];

    dotenv.config({ path: path.resolve(__dirname, '../.env') });
};

module.exports = { reloadEnv };
