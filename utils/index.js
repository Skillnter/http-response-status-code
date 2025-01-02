"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidStatusCode = exports.listServerErrorCodes = exports.checkServerError = exports.listClientErrorCodes = exports.checkClientError = exports.listRedirectionalCodes = exports.checkRedirectional = exports.listSuccessCodes = exports.checkSuccess = exports.listInformationalCodes = exports.checkInformational = exports.ClassLimits = void 0;
exports.ClassLimits = {
    Informational: {
        MIN: 100,
        MAX: 199,
    },
    Success: {
        MIN: 200,
        MAX: 299,
    },
    Redirectional: {
        MIN: 300,
        MAX: 399,
    },
    ClientError: {
        MIN: 400,
        MAX: 499,
    },
    ServerError: {
        MIN: 500,
        MAX: 599,
    },
};
/**
 * Checks if the given status code is an informational status code.
 * @name checkInformational
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is informational, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
var checkInformational = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code))) {
        return (code <= exports.ClassLimits.Informational.MAX &&
            code >= exports.ClassLimits.Informational.MIN);
    }
    else {
        throw new Error("Status code does not exist: ".concat(code));
    }
};
exports.checkInformational = checkInformational;
/**
 * Returns all the informational HTTP status codes.
 * @name listInformationalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the informational HTTP status codes.
 */
var listInformationalCodes = function (STATUS_CODES) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    var informationalCodes = [];
    for (var code = exports.ClassLimits.Informational.MIN; code <= exports.ClassLimits.Informational.MAX; code++) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            informationalCodes.push(code);
        }
    }
    return informationalCodes;
};
exports.listInformationalCodes = listInformationalCodes;
/**
 * Checks if the given status code is a success status code.
 * @name checkSuccess
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is success, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
var checkSuccess = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code))) {
        return (code <= exports.ClassLimits.Success.MAX && code >= exports.ClassLimits.Success.MIN);
    }
    else {
        throw new Error("Status code does not exist: ".concat(code));
    }
};
exports.checkSuccess = checkSuccess;
/**
 * Returns all the success HTTP status codes.
 * @name listSuccessCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the success HTTP status codes.
 */
var listSuccessCodes = function (STATUS_CODES) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    var successCodes = [];
    for (var code = exports.ClassLimits.Success.MIN; code <= exports.ClassLimits.Success.MAX; code++) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            successCodes.push(code);
        }
    }
    return successCodes;
};
exports.listSuccessCodes = listSuccessCodes;
/**
 * Checks if the given status code is a redirectional status code.
 * @name checkRedirectional
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is redirectional, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
var checkRedirectional = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code))) {
        return (code <= exports.ClassLimits.Redirectional.MAX &&
            code >= exports.ClassLimits.Redirectional.MIN);
    }
    else {
        throw new Error("Status code does not exist: ".concat(code));
    }
};
exports.checkRedirectional = checkRedirectional;
/**
 * Returns all the redirectional HTTP status codes.
 * @name listRedirectionalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the redirectional HTTP status codes.
 */
var listRedirectionalCodes = function (STATUS_CODES) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    var redirectionalCodes = [];
    for (var code = exports.ClassLimits.Redirectional.MIN; code <= exports.ClassLimits.Redirectional.MAX; code++) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            redirectionalCodes.push(code);
        }
    }
    return redirectionalCodes;
};
exports.listRedirectionalCodes = listRedirectionalCodes;
/**
 * Checks if the given status code is a client error status code.
 * @name checkClientError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is client error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
var checkClientError = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code))) {
        return (code <= exports.ClassLimits.ClientError.MAX &&
            code >= exports.ClassLimits.ClientError.MIN);
    }
    else {
        throw new Error("Status code does not exist: ".concat(code));
    }
};
exports.checkClientError = checkClientError;
/**
 * Returns all the client side error HTTP status codes.
 * @name listClientErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the client side error HTTP status codes.
 */
var listClientErrorCodes = function (STATUS_CODES) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    var clientErrorCodes = [];
    for (var code = exports.ClassLimits.ClientError.MIN; code <= exports.ClassLimits.ClientError.MAX; code++) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            clientErrorCodes.push(code);
        }
    }
    return clientErrorCodes;
};
exports.listClientErrorCodes = listClientErrorCodes;
/**
 * Checks if the given status code is a server error status code.
 * @name checkServerError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is server error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
var checkServerError = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code))) {
        return (code <= exports.ClassLimits.ServerError.MAX &&
            code >= exports.ClassLimits.ServerError.MIN);
    }
    else {
        throw new Error("Status code does not exist: ".concat(code));
    }
};
exports.checkServerError = checkServerError;
/**
 * Returns all the server side error HTTP status codes.
 * @name listServerErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the server side error HTTP status codes.
 */
var listServerErrorCodes = function (STATUS_CODES) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    var serverErrorCodes = [];
    for (var code = exports.ClassLimits.ServerError.MIN; code <= exports.ClassLimits.ServerError.MAX; code++) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            serverErrorCodes.push(code);
        }
    }
    return serverErrorCodes;
};
exports.listServerErrorCodes = listServerErrorCodes;
/**
 * Checks if the given status code is valid.
 * @name checkValidStatusCode
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is valid, false otherwise.
 */
var checkValidStatusCode = function (STATUS_CODES, code) {
    if (STATUS_CODES === void 0) { STATUS_CODES = {}; }
    STATUS_CODES = STATUS_CODES !== null && STATUS_CODES !== void 0 ? STATUS_CODES : {};
    return Object.prototype.hasOwnProperty.call(STATUS_CODES, "".concat(code));
};
exports.checkValidStatusCode = checkValidStatusCode;
