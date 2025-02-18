import { ClassLimits, CODES } from "../../constants";

/**
 * Determines whether the specified status code represents an informational status.
 * @name Informational Code Check
 * @param {number} code - The code number of the status (e.g., `100`).
 * @returns {boolean} isInformational - Returns `true` if the status code represents a informational status code (1xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isInformational(100)); // True
 * console.log(STATUS_CODES.isInformational(200)); // False
 */
export function isInformational(code: number): boolean | Error {
    if (Object.prototype.hasOwnProperty.call(CODES, code)) {
        return (
            code <= ClassLimits.Informational.MAX &&
            code >= ClassLimits.Informational.MIN
        );
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Determines whether the specified status code represents a success status.
 * @name Success Code Check
 * @param {number} code - The code number of the status (e.g., `200`).
 * @returns {boolean} isSuccess - Returns `true` if the status code represents a success status code (2xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isSuccess(200)); // True
 * console.log(STATUS_CODES.isSuccess(100)); // False
 */
export function isSuccess(code: number) {
    if (Object.prototype.hasOwnProperty.call(CODES, code)) {
        return (
            code <= ClassLimits.Success.MAX && code >= ClassLimits.Success.MIN
        );
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Determines whether the specified status code represents a redirection status.
 * @name Redirection Code Check
 * @param {number} code - The code number of the status (e.g., `300`).
 * @returns {boolean} isRedirectional - Returns `true` if the status code represents a redirection status code (3xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isRedirectional(300)); // True
 * console.log(STATUS_CODES.isRedirectional(100)); // False
 */
export function isRedirectional(code: number) {
    if (Object.prototype.hasOwnProperty.call(CODES, code)) {
        return (
            code <= ClassLimits.Redirectional.MAX &&
            code >= ClassLimits.Redirectional.MIN
        );
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Determines whether the specified status code represents a client side error status.
 * @name Client Error Code Check
 * @param {number} code - The code number of the status (e.g., `400`).
 * @returns {boolean} isClientError - Returns `true` if the status code represents a client side error status code (4xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isClientError(400)); // True
 * console.log(STATUS_CODES.isClientError(100)); // False
 */
export function isClientError(code: number) {
    if (Object.prototype.hasOwnProperty.call(CODES, code)) {
        return (
            code <= ClassLimits.ClientError.MAX &&
            code >= ClassLimits.ClientError.MIN
        );
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Determines whether the specified status code represents a server side error status.
 * @name Server Error Code Check
 * @param {number} code - The code number of the status (e.g., `500`).
 * @returns {boolean} isServerError - Returns `true` if the status code represents a server side error status code (5xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isServerError(500)); // True
 * console.log(STATUS_CODES.isServerError(100)); // False
 */
export function isServerError(code: number) {
    if (Object.prototype.hasOwnProperty.call(CODES, code)) {
        return (
            code <= ClassLimits.ServerError.MAX &&
            code >= ClassLimits.ServerError.MIN
        );
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Validates whether the provided status code is recognized as valid.
 * @name Valid Code Check
 * @param {number} code - The code number of the status (e.g., `500`).
 * @returns {boolean} isValidStatusCode - Returns `true` if the status code represents a valid status code (1xx, 2xx, ..., 5xx), otherwise returns `false`.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.isValidStatusCode(500)); // True
 * console.log(STATUS_CODES.isValidStatusCode(999)); // False
 */
export function isValidStatusCode(code: number) {
    return Object.prototype.hasOwnProperty.call(CODES, code);
}
