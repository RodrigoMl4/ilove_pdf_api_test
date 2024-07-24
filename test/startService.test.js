const chai = require('chai');
const expect = chai.expect;
const { startProcess } = require('../services/startService');

describe('start function', function () {
  let response;
  this.timeout(10000);

  before(async function () {
    response = await startProcess();
    const { server, task } = response.data;

    process.env.SERVER = server;
    process.env.TASK = task;
  });

  it('should return status code 200', function () {
    expect(response.status).to.equal(200);
  });

  it('should have a valid task ID', function () {
    const jsonData = response.data; 
    expect(jsonData.task).to.be.a('string');
  });
});
