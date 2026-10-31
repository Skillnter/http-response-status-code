var assert = require("assert");
import * as STATUS_CODES from "../../../src/utils";

describe("*** Response ***", function () {
    describe("** toResponseInit **", function () {
        it("Should return ResponseInit object for valid numeric code", function () {
            var result = STATUS_CODES.toResponseInit(200);
            assert.deepStrictEqual(result, {
                status: 200,
                statusText: "OK",
            });
        });

        it("Should return ResponseInit object for status code constant OK", function () {
            var result = STATUS_CODES.toResponseInit(STATUS_CODES.getStatusCode("OK"));
            assert.deepStrictEqual(result, {
                status: 200,
                statusText: "OK",
            });
        });

        it("Should return ResponseInit object for valid status name string", function () {
            var result = STATUS_CODES.toResponseInit("OK");
            assert.deepStrictEqual(result, {
                status: 200,
                statusText: "OK",
            });
        });

        it("Should return ResponseInit object for valid numeric string", function () {
            var result = STATUS_CODES.toResponseInit("404");
            assert.deepStrictEqual(result, {
                status: 404,
                statusText: "Not Found",
            });
        });

        it("Should merge additional init properties like headers", function () {
            var result = STATUS_CODES.toResponseInit(200, {
                headers: { "Content-Type": "application/json" },
            });
            assert.deepStrictEqual(result, {
                headers: { "Content-Type": "application/json" },
                status: 200,
                statusText: "OK",
            });
        });

        it("Should allow overriding statusText in init", function () {
            var result = STATUS_CODES.toResponseInit(200, {
                statusText: "Custom Status",
            });
            assert.deepStrictEqual(result, {
                status: 200,
                statusText: "Custom Status",
            });
        });

        it("Should throw error for non-existent numeric status code", function () {
            assert.throws(() => {
                STATUS_CODES.toResponseInit(999);
            }, /Status code does not exist: 999/);
        });

        it("Should throw error for non-existent status name string", function () {
            assert.throws(() => {
                STATUS_CODES.toResponseInit("NOT_AN_HTTP_CODE");
            }, /Status code does not exist: NOT_AN_HTTP_CODE/);
        });

        it("Should throw error for invalid type argument", function () {
            assert.throws(() => {
                STATUS_CODES.toResponseInit(null as any);
            }, /Status code does not exist/);
        });
    });
});
