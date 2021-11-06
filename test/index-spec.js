var assert = require("assert");
var STATUS_CODES = require("../index.js");
describe("status_code", function() {
    it("print status code", function () {
        var result = STATUS_CODES.OK;
        assert.equal(result, 200);
    });
    it("print status message", function () {
        var result = STATUS_CODES.getStatusDescription(200);
        assert.equal(result, "OK");
    });
    it("print status name", function () {
        var result = STATUS_CODES.getStatusName(200);
        assert.equal(result, "OK");
    });
    it("print status code from status name", function () {
        var result = STATUS_CODES.getStatusCode("OK");
        assert.equal(result, 200);
    });
    it("print status message fail", function () {
        assert.throws(() => {STATUS_CODES.getStatusDescription(0);}, Error);
    });
    it("print status name fail", function () {
        assert.throws(() => {STATUS_CODES.getStatusName(0);}, Error);
    });
    it("print status code from status name fail", function () {
        assert.throws(() => {STATUS_CODES.getStatusCode("NOT OK");}, Error);
    });
});