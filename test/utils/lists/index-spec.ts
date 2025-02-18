var assert = require("assert");
import * as STATUS_CODES from "../../../src/utils";
describe("*** Lists ***", function () {
    describe("** getInformationalCodes **", function () {
        const INFORMATIONAL_CODES = [100, 101, 102, 103, 122];
        it("Should return INFORMATIONAL_CODES", function () {
            var result = STATUS_CODES.getInformationalCodes();
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(INFORMATIONAL_CODES)
            );
        });
    });
    describe("** getSuccessCodes **", function () {
        const SUCCESS_CODES = [
            200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
        ];
        it("Should return SUCCESS_CODES", function () {
            var result = STATUS_CODES.getSuccessCodes();
            assert.equal(JSON.stringify(result), JSON.stringify(SUCCESS_CODES));
        });
    });
    describe("** getRedirectionalCodes **", function () {
        const REDIRECTIONAL_CODES = [
            300, 301, 302, 303, 304, 305, 306, 307, 308,
        ];
        it("Should return REDIRECTIONAL_CODES", function () {
            var result = STATUS_CODES.getRedirectionalCodes();
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(REDIRECTIONAL_CODES)
            );
        });
    });
    describe("** getClientErrorCodes **", function () {
        const CLIENT_ERROR_CODES = [
            400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
            413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425,
            426, 428, 429, 431, 451,
        ];
        it("Should return CLIENT_ERROR_CODES", function () {
            var result = STATUS_CODES.getClientErrorCodes();
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(CLIENT_ERROR_CODES)
            );
        });
    });
    describe("** getServerErrorCodes **", function () {
        const SERVER_ERROR_CODES = [
            500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
        ];
        it("Should return SERVER_ERROR_CODES", function () {
            var result = STATUS_CODES.getServerErrorCodes();
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(SERVER_ERROR_CODES)
            );
        });
    });
});
