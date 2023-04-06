var assert = require("assert");
var STATUS_CODES = require("../index.js");
describe("status_code", function() {
    it("Should print status code", function () {
        var result = STATUS_CODES.OK;
        assert.equal(result, 200);
    });
    it("Should print status message", function () {
        var result = STATUS_CODES.getStatusDescription(200);
        assert.equal(result, "OK");
    });
    it("Should print status name", function () {
        var result = STATUS_CODES.getStatusName(200);
        assert.equal(result, "OK");
    });
    it("Should print status code from status name", function () {
        var result = STATUS_CODES.getStatusCode("OK");
        assert.equal(result, 200);
    });
    it("Should print status code from code variable", function () {
        var result = STATUS_CODES.CODES.HTTP_CODE_200;
        assert.equal(result, 200);
    });
    it("Should throw error when any of the SKIP_LIST element is passed", function () {
        const SKIP_LIST = ["CODES", "getStatusCode", "getStatusName", "getStatusDescription"];
        for (let key of SKIP_LIST) {
            assert.throws(() => {
                STATUS_CODES.getStatusDescription(key);
            }, Error);
        }
    });
    it("Should throw error when getStatusDescription get wrong code", function () {
        assert.throws(() => {STATUS_CODES.getStatusDescription(0);}, Error);
    });
    it("Should throw error when getStatusName get wrong code", function () {
        assert.throws(() => {STATUS_CODES.getStatusName(0);}, Error);
    });
    it("Should throw error when getStatusCode get wrong name", function () {
        assert.throws(() => {STATUS_CODES.getStatusCode("NOT OK");}, Error);
    });
    it("Should throw error when getStatusCode get name as CODES", function () {
        assert.throws(() => {STATUS_CODES.getStatusCode("CODES");}, Error);
    });
});