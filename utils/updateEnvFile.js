const fs = require('fs');
const path = require('path');

function updateEnvFile(key, value) {
    const envFilePath = path.resolve(__dirname, '../.env');
    let envFileContent = fs.readFileSync(envFilePath, 'utf8');
    const regex = new RegExp(`${key}=.*`);
    if (regex.test(envFileContent)) {
        envFileContent = envFileContent.replace(regex, `${key}=${value}`);
    } else {
        envFileContent += `\n${key}=${value}`;
    }
    fs.writeFileSync(envFilePath, envFileContent, 'utf8');
}

module.exports = { updateEnvFile };
