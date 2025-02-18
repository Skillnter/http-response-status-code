import {
    CLIENT_ERROR_CODES,
    INFORMATIONAL_CODES,
    REDIRECTION_CODES,
    SERVER_ERROR_CODES,
    SUCCESS_CODES,
} from "../../constants";

/**
 * Provides a list of all the informational HTTP status codes.
 * @name List Informational Codes
 * @returns {number[]} result - An array of all the informational HTTP status codes.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getInformationalCodes()); // [100, 101, ...]
 */
export function getInformationalCodes(): number[] {
    return INFORMATIONAL_CODES as number[];
}

/**
 * Provides a list of all the success HTTP status codes.
 * @name List Success Codes
 * @returns {number[]} result - An array of all the success HTTP status codes.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getSuccessCodes()); // [200, 201, ...]
 */
export function getSuccessCodes() {
    return SUCCESS_CODES as number[];
}

/**
 * Provides a list of all the redirection HTTP status codes.
 * @name List Redirection Codes
 * @returns {number[]} result - An array of all the redirection HTTP status codes.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getRedirectionalCodes()); // [300, 301, ...]
 */
export function getRedirectionalCodes() {
    return REDIRECTION_CODES as number[];
}

/**
 * Provides a list of all the client side error HTTP status codes.
 * @name List Client Side Error Codes
 * @returns {number[]} result - An array of all the client side error HTTP status codes.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getClientErrorCodes()); // [400, 401, ...]
 */
export function getClientErrorCodes() {
    return CLIENT_ERROR_CODES as number[];
}

/**
 * Provides a list of all the server side error HTTP status codes.
 * @name List Server Side Error Codes
 * @returns {number[]} result - An array of all the server side error HTTP status codes.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.getServerErrorCodes()); // [500, 501, ...]
 */
export function getServerErrorCodes() {
    return SERVER_ERROR_CODES as number[];
}
