var assert = require("assert");
import * as STATUS_CODES from "../../../src/utils";
describe("*** Status ***", function () {
    describe("** getStatusCode **", function () {
        it("Should return code for valid status name", function () {
            var result = STATUS_CODES.getStatusCode("OK");
            assert.equal(result, 200);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.getStatusCode("ASA");
            }, Error);
        });
    });
    describe("** getStatusName **", function () {
        it("Should return name for valid status code", function () {
            var result = STATUS_CODES.getStatusName(200);
            assert.equal(result, "OK");
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.getStatusName(999);
            }, Error);
        });
    });
    describe("** getStatusDescription **", function () {
        it("Should return description for valid status code", function () {
            var result = STATUS_CODES.getStatusDescription(200);
            assert.equal(result, "OK");
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.getStatusDescription(999);
            }, Error);
        });
    });
});
