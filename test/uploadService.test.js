const chai = require('chai');
const expect = chai.expect;
const { uploadFile } = require('../services/uploadService');

describe('Upload Function Tests', function () {
  this.timeout(10000);
  let result;

  before(async function () {
    result = await uploadFile();

    const { server_filename } = result.data;
    process.env.SERVER_FILENAME = server_filename;
    
  });

  it('should verify status of successful upload', function () {
    expect(result.status).to.equal(200);
  });

  it('should verify message of successful response', function () {
    expect(result.data).to.have.property('server_filename');
    expect(result.data.server_filename).to.not.be.empty;
  });
});
