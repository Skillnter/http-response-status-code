import {
    HTTP_STATUS_CODES,
    HTTP_STATUS_DESCRIPTION,
    HTTP_STATUS_NAMES,
} from "../../constants";

/**
 * Returns the HTTP status code from status code name.
 * @name Get Status Code
 * @param {string} name - The name of the status code (e.g., `"IM_A_TEAPOT"`).
 * @returns {number} code -  The code number of the status if code exists.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getStatusCode("IM_A_TEAPOT")); // 418
 */
export function getStatusCode(name: string): number | Error {
    if (Object.prototype.hasOwnProperty.call(HTTP_STATUS_CODES, `${name}`)) {
        return HTTP_STATUS_CODES[name];
    }
    throw new Error(`Status code does not exist: ${name}`);
}

/**
 * Returns the HTTP status code name from status code (e.g., `418`).
 * @name Get Status Name
 * @param {number} code - The code number of the status (e.g., `418`).
 * @returns {string} name - The name of the status code if name exists.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getStatusName(418)); // "IM_A_TEAPOT"
 */
export function getStatusName(code: number): string | Error {
    if (Object.prototype.hasOwnProperty.call(HTTP_STATUS_NAMES, code)) {
        return HTTP_STATUS_NAMES[code];
    }
    throw new Error(`Status code does not exist: ${code}`);
}

/**
 * Returns the status description from HTTP status code (e.g., 418).
 * @name Get Status Description
 * @param {number} code - The code number of the status (e.g., `418`).
 * @returns {string} description - The description of the status code if code exists.
 * @throws {Error} An error object if something goes wrong, containing details about the issue.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getStatusDescription(500)); // "Internal Server Error"
 */
export function getStatusDescription(code: number): string | Error {
    if (Object.prototype.hasOwnProperty.call(HTTP_STATUS_DESCRIPTION, code)) {
        return HTTP_STATUS_DESCRIPTION[code];
    }
    throw new Error(`Status code does not exist: ${code}`);
}
