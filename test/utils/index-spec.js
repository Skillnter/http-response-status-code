var assert = require("assert");
var UTILS = require("../../utils/index.js");
describe("Utils", function () {
    describe("when no STATUS_CODE is passed", function () {
        it("Should throw error in checkInformational", function () {
            assert.throws(() => {
                UTILS.checkInformational(undefined, 200);
            }, Error);
        });
        it("Should return empty array in listInformationalCodes", function () {
            assert.equal(JSON.stringify(UTILS.listInformationalCodes()), "[]");
        });
        it("Should throw error in checkSuccess", function () {
            assert.throws(() => {
                UTILS.checkSuccess(undefined, 100);
            }, Error);
        });
        it("Should return empty array in listSuccessCodes", function () {
            assert.equal(JSON.stringify(UTILS.listSuccessCodes()), "[]");
        });
        it("Should throw error in checkRedirectional", function () {
            assert.throws(() => {
                UTILS.checkRedirectional(undefined, 100);
            }, Error);
        });
        it("Should return empty array in listRedirectionalCodes", function () {
            assert.equal(JSON.stringify(UTILS.listRedirectionalCodes()), "[]");
        });
        it("Should throw error in checkClientError", function () {
            assert.throws(() => {
                UTILS.checkClientError(undefined, 100);
            }, Error);
        });
        it("Should return empty array in listClientErrorCodes", function () {
            assert.equal(JSON.stringify(UTILS.listClientErrorCodes()), "[]");
        });
        it("Should throw error in checkServerError", function () {
            assert.throws(() => {
                UTILS.checkServerError(undefined, 100);
            }, Error);
        });
        it("Should return empty array in listServerErrorCodes", function () {
            assert.equal(JSON.stringify(UTILS.listServerErrorCodes()), "[]");
        });
        it("Should return false in checkValidStatusCode", function () {
            assert.equal(UTILS.checkValidStatusCode(undefined, 100), false);
        });
    });
    describe("when STATUS_CODE as null is passed", function () {
        it("Should throw error in checkInformational", function () {
            assert.throws(() => {
                UTILS.checkInformational(null, 200);
            }, Error);
        });
        it("Should return empty array in listInformationalCodes", function () {
            assert.equal(
                JSON.stringify(UTILS.listInformationalCodes(null)),
                "[]"
            );
        });
        it("Should throw error in checkSuccess", function () {
            assert.throws(() => {
                UTILS.checkSuccess(null, 100);
            }, Error);
        });
        it("Should return empty array in listSuccessCodes", function () {
            assert.equal(JSON.stringify(UTILS.listSuccessCodes(null)), "[]");
        });
        it("Should throw error in checkRedirectional", function () {
            assert.throws(() => {
                UTILS.checkRedirectional(null, 100);
            }, Error);
        });
        it("Should return empty array in listRedirectionalCodes", function () {
            assert.equal(
                JSON.stringify(UTILS.listRedirectionalCodes(null)),
                "[]"
            );
        });
        it("Should throw error in checkClientError", function () {
            assert.throws(() => {
                UTILS.checkClientError(null, 100);
            }, Error);
        });
        it("Should return empty array in listClientErrorCodes", function () {
            assert.equal(
                JSON.stringify(UTILS.listClientErrorCodes(null)),
                "[]"
            );
        });
        it("Should throw error in checkServerError", function () {
            assert.throws(() => {
                UTILS.checkServerError(null, 100);
            }, Error);
        });
        it("Should return empty array in listServerErrorCodes", function () {
            assert.equal(
                JSON.stringify(UTILS.listServerErrorCodes(null)),
                "[]"
            );
        });
        it("Should return false in checkValidStatusCode", function () {
            assert.equal(UTILS.checkValidStatusCode(null, 100), false);
        });
    });
});
