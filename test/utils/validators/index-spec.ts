var assert = require("assert");
import * as STATUS_CODES from "../../../src/utils";
describe("*** Validators ***", function () {
    describe("** isInformational **", function () {
        it("Should return true for 1xx code", function () {
            var result = STATUS_CODES.isInformational(100);
            assert.equal(result, true);
        });
        it("Should return false for non 1xx code", function () {
            var result = STATUS_CODES.isInformational(200);
            assert.equal(result, false);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.isInformational(999);
            }, Error);
        });
    });
    describe("** isSuccess **", function () {
        it("Should return true for 2xx code", function () {
            var result = STATUS_CODES.isSuccess(200);
            assert.equal(result, true);
        });
        it("Should return false for non 2xx code", function () {
            var result = STATUS_CODES.isSuccess(300);
            assert.equal(result, false);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.isSuccess(999);
            }, Error);
        });
    });
    describe("** isRedirectional **", function () {
        it("Should return true for 3xx code", function () {
            var result = STATUS_CODES.isRedirectional(300);
            assert.equal(result, true);
        });
        it("Should return false for non 3xx code", function () {
            var result = STATUS_CODES.isRedirectional(400);
            assert.equal(result, false);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.isRedirectional(999);
            }, Error);
        });
    });
    describe("** isClientError **", function () {
        it("Should return true for 4xx code", function () {
            var result = STATUS_CODES.isClientError(400);
            assert.equal(result, true);
        });
        it("Should return false for non 4xx code", function () {
            var result = STATUS_CODES.isClientError(500);
            assert.equal(result, false);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.isClientError(999);
            }, Error);
        });
    });
    describe("** isServerError **", function () {
        it("Should return true for 5xx code", function () {
            var result = STATUS_CODES.isServerError(500);
            assert.equal(result, true);
        });
        it("Should return false for non 5xx code", function () {
            var result = STATUS_CODES.isServerError(100);
            assert.equal(result, false);
        });
        it("Should throw error for non valid code", function () {
            assert.throws(() => {
                STATUS_CODES.isServerError(999);
            }, Error);
        });
    });
    describe("** isValidStatusCode **", function () {
        it("Should return true for (1xx, 2xx, 3xx, 4xx, 5xx) code", function () {
            var result = STATUS_CODES.isValidStatusCode(500);
            assert.equal(result, true);
        });
        it("Should return false for non (1xx, 2xx, 3xx, 4xx, 5xx) code", function () {
            var result = STATUS_CODES.isValidStatusCode(99);
            assert.equal(result, false);
        });
    });
});
