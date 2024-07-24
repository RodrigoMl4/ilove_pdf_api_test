require('dotenv').config({ path: './.env' });
const { authenticate } = require('./services/authService');
const { startProcess } = require('./services/startService');
const { uploadFile } = require('./services/uploadService');
const { processFile } = require('./services/processService');
const { download } = require('./services/downloadService');
const { listTasks } = require('./services/listTasksService');
const { updateEnvFile } = require('./utils/updateEnvFile');


const runProcess = async () => {
    try {
      const authResponse = await authenticate();
      console.log('Authentication successful', authResponse.data);

      const { token } = authResponse.data;
      process.env.TOKEN = token;
  
      const startResponse = await startProcess();
      console.log('Start process successful:', startResponse.data);
  
      const { server, task } = startResponse.data;

      process.env.SERVER = server;
      process.env.TASK = task;
  
      const uploadResponse = await uploadFile();
      console.log('Upload successful:', uploadResponse.data);
  
      const { server_filename } = uploadResponse.data;
      process.env.SERVER_FILENAME = server_filename;
  
      const processResponse = await processFile();
      console.log('Process successful:', processResponse.data);

      const downloadResponse = await download();
      console.log('Download successful:');

      const listTasksResponse = await listTasks();
      console.log('List tasks successful:', listTasksResponse.data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  runProcess();
  