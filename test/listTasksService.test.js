const chai = require('chai');
const expect = chai.expect;
const { listTasks } = require('../services/listTasksService');

describe('List Tasks Tests', function() {
    this.timeout(10000);
    let response;

    before(async function() {
        response = await listTasks();
    });

    it('should return status code 200', function() {
        expect(response.status).to.equal(200);
    });

    it('should return a list of tasks', function() {
        const jsonData = response.data; 
        expect(jsonData).to.be.an('array');
    });
});
