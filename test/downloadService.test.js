const chai = require('chai');
const expect = chai.expect;
const { download } = require('../services/downloadService');

describe('Download Function Tests', function () {
    this.timeout(10000);
    let result;

    before(async function () {
        result = await download();
    });

    it('should verify status of successful download', function () {
        expect(result.status).to.equal(200);
    });

    it('should verify response headers', function () {
        expect(result.headers).to.have.property('content-type');
        const contentType = result.headers['content-type'];
        expect(contentType).to.be.oneOf(["application/pdf", "application/octet-stream"]);
        
        expect(result.headers).to.have.property('content-disposition');
        const contentDisposition = result.headers['content-disposition'];
        expect(contentDisposition).to.include("attachment");
        expect(contentDisposition).to.match(/filename=".*"/);
        
        expect(result.headers).to.have.property('content-length');
        const contentLength = parseInt(result.headers['content-length'], 10);
        expect(contentLength).to.be.above(0);
    });
});
