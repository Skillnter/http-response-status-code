var assert = require("assert");
import { HTTP_STATUS_CODES } from "../src/constants";
import * as STATUS_CODES from "../src/index";
describe("status_code", function () {
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
        const SKIP_LIST = [
            "CODES",
            "getStatusCode",
            "getStatusName",
            "getStatusDescription",
            "isInformational",
            "isSuccess",
            "isRedirectional",
            "isClientError",
            "isServerError",
        ];
        for (let key of SKIP_LIST) {
            assert.throws(() => {
                STATUS_CODES.getStatusCode(key);
            }, Error);
        }
    });
    it("Should throw error when getStatusDescription get wrong code", function () {
        assert.throws(() => {
            STATUS_CODES.getStatusDescription(0);
        }, Error);
    });
    it("Should throw error when getStatusName get wrong code", function () {
        assert.throws(() => {
            STATUS_CODES.getStatusName(0);
        }, Error);
    });
    it("Should throw error when getStatusCode get wrong name", function () {
        assert.throws(() => {
            STATUS_CODES.getStatusCode("NOT OK");
        }, Error);
    });
    it("Should throw error when getStatusCode get name as CODES", function () {
        assert.throws(() => {
            STATUS_CODES.getStatusCode("CODES");
        }, Error);
    });
    it("Should print true when isInformational get code as 100", function () {
        var result = STATUS_CODES.isInformational(100);
        assert.equal(result, true);
    });
    it("Should print false when isInformational get code as 200", function () {
        var result = STATUS_CODES.isInformational(200);
        assert.equal(result, false);
    });
    it("Should throw error when isInformational get code as 999", function () {
        assert.throws(() => {
            STATUS_CODES.isInformational(999);
        }, Error);
    });
    it("Should print true when isSuccess get code as 200", function () {
        var result = STATUS_CODES.isSuccess(200);
        assert.equal(result, true);
    });
    it("Should print false when isSuccess get code as 300", function () {
        var result = STATUS_CODES.isSuccess(300);
        assert.equal(result, false);
    });
    it("Should throw error when isSuccess get code as 999", function () {
        assert.throws(() => {
            STATUS_CODES.isSuccess(999);
        }, Error);
    });
    it("Should print true when isRedirectional get code as 300", function () {
        var result = STATUS_CODES.isRedirectional(300);
        assert.equal(result, true);
    });
    it("Should print false when isRedirectional get code as 400", function () {
        var result = STATUS_CODES.isRedirectional(400);
        assert.equal(result, false);
    });
    it("Should throw error when isRedirectional get code as 999", function () {
        assert.throws(() => {
            STATUS_CODES.isRedirectional(999);
        }, Error);
    });
    it("Should print true when isClientError get code as 400", function () {
        var result = STATUS_CODES.isClientError(400);
        assert.equal(result, true);
    });
    it("Should print false when isClientError get code as 500", function () {
        var result = STATUS_CODES.isClientError(500);
        assert.equal(result, false);
    });
    it("Should throw error when isClientError get code as 999", function () {
        assert.throws(() => {
            STATUS_CODES.isClientError(999);
        }, Error);
    });
    it("Should print true when isServerError get code as 500", function () {
        var result = STATUS_CODES.isServerError(500);
        assert.equal(result, true);
    });
    it("Should print false when isServerError get code as 200", function () {
        var result = STATUS_CODES.isServerError(200);
        assert.equal(result, false);
    });
    it("Should throw error when isServerError get code as 999", function () {
        assert.throws(() => {
            STATUS_CODES.isServerError(999);
        }, Error);
    });
    it("Should return informational status list", function () {
        const INFORMATIONAL_CODES = [100, 101, 102, 103, 122];
        var result = STATUS_CODES.getInformationalCodes();
        assert.equal(
            JSON.stringify(result),
            JSON.stringify(INFORMATIONAL_CODES)
        );
    });
    it("Should return success status list", function () {
        const SUCCESS_CODES = [
            200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
        ];
        var result = STATUS_CODES.getSuccessCodes();
        assert.equal(JSON.stringify(result), JSON.stringify(SUCCESS_CODES));
    });
    it("Should return redirectional status list", function () {
        const REDIRECTIONAL_CODES = [
            300, 301, 302, 303, 304, 305, 306, 307, 308,
        ];
        var result = STATUS_CODES.getRedirectionalCodes();
        assert.equal(
            JSON.stringify(result),
            JSON.stringify(REDIRECTIONAL_CODES)
        );
    });
    it("Should return client side error status list", function () {
        const CLIENT_ERROR_CODES = [
            400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
            413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425,
            426, 428, 429, 431, 451,
        ];
        var result = STATUS_CODES.getClientErrorCodes();
        assert.equal(
            JSON.stringify(result),
            JSON.stringify(CLIENT_ERROR_CODES)
        );
    });
    it("Should return server client error status list", function () {
        const SERVER_ERROR_CODES = [
            500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
        ];
        var result = STATUS_CODES.getServerErrorCodes();
        assert.equal(
            JSON.stringify(result),
            JSON.stringify(SERVER_ERROR_CODES)
        );
    });
    it("Should print false when isValidStatusCode get code as 999", function () {
        var result = STATUS_CODES.isValidStatusCode(999);
        assert.equal(result, false);
    });
    it("Should print true when isValidStatusCode get code as 200", function () {
        var result = STATUS_CODES.isValidStatusCode(200);
        assert.equal(result, true);
    });
    it("Should have all status code names as exported members", function () {
        for (let [name] of Object.entries(HTTP_STATUS_CODES)) {
            expect((STATUS_CODES as Record<string, any>)[name]).toBeDefined();
        }
        console.log(STATUS_CODES.OK);
    });
});
