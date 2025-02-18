const assert = require("assert");
import {
    mapCodesToNames,
    mapCodesToDescriptions,
    mapNamesToCodes,
    listCodes,
} from "../../../src/utils/mappers";
import * as Constants from "../../../src/constants";
import { ClassTypes } from "../../../src/constants";
describe.only("*** Lists ***", function () {
    describe("** mapCodesToNames **", function () {
        it("Should return HTTP_STATUS_NAMES", function () {
            var result = mapCodesToNames(Constants.HTTP_STATUS_MAPPINGS);
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(Constants.HTTP_STATUS_NAMES)
            );
        });
    });
    describe("** mapNamesToCodes **", function () {
        it("Should return HTTP_STATUS_CODES", function () {
            var result = mapNamesToCodes(Constants.HTTP_STATUS_MAPPINGS);
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(Constants.HTTP_STATUS_CODES)
            );
        });
    });
    describe("** mapCodesToDescriptions **", function () {
        it("Should return HTTP_STATUS_DESCRIPTION", function () {
            var result = mapCodesToDescriptions(Constants.HTTP_STATUS_MAPPINGS);
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(Constants.HTTP_STATUS_DESCRIPTION)
            );
        });
    });
    describe("** listCodes **", function () {
        it("Should return list of codes for valid class type", function () {
            var result = listCodes(
                Constants.ClassLimits,
                Constants.CODES,
                "Success"
            );
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(Constants.SUCCESS_CODES)
            );
        });
        it("Should return list of codes for valid class type", function () {
            var result = listCodes(
                Constants.ClassLimits,
                Constants.CODES,
                ClassTypes.SERVER_ERROR
            );
            assert.equal(
                JSON.stringify(result),
                JSON.stringify(Constants.SERVER_ERROR_CODES)
            );
        });
        it("Should throw error for non valid class type", function () {
            assert.throws(() => {
                listCodes(Constants.ClassLimits, Constants.CODES, "999");
            }, Error);
        });
    });
});
