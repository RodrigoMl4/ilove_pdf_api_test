const chai = require('chai');
const expect = chai.expect;
const { processFile } = require('../services/processService');


describe('Process File Tests', function() {
  this.timeout(100000); 
  let response;

  before(async function() {
    response = await processFile();
  });
  
  it('should verify status of successful process', function() {
    expect(response.status).to.equal(200);
  });
  });
  