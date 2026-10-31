import {
    HTTP_STATUS_CODES,
    HTTP_STATUS_DESCRIPTION,
} from "../../constants";
import { IResponseInit } from "../../interfaces";

/**
 * Returns an object compatible with the Fetch API ResponseInit ({ status: number, statusText: string }).
 *
 * @name Web Standard Response Object Helper
 * @param {number | string} code - The HTTP status code (e.g., `200` or `OK`) or name of the status code (e.g., `"OK"`).
 * @param {Record<string, any>} [init] - Optional ResponseInit properties to merge (e.g., headers, statusText override).
 * @returns {IResponseInit} An object containing status and statusText compatible with Fetch API ResponseInit.
 * @throws {Error} An error object if the status code does not exist.
 *
 * @example
 * var STATUS_CODES = require('http-response-status-code');
 * console.log(STATUS_CODES.toResponseInit(STATUS_CODES.OK));
 * // { status: 200, statusText: "OK" }
 *
 * console.log(STATUS_CODES.toResponseInit(STATUS_CODES.NOT_FOUND, { headers: { "Content-Type": "application/json" } }));
 * // { headers: { "Content-Type": "application/json" }, status: 404, statusText: "Not Found" }
 */
export function toResponseInit<
    T extends Record<string, any> = Record<string, any>
>(code: number | string, init?: T): IResponseInit & T {
    let statusCode: number;

    if (typeof code === "number") {
        statusCode = code;
    } else if (typeof code === "string") {
        if (Object.prototype.hasOwnProperty.call(HTTP_STATUS_CODES, code)) {
            statusCode = HTTP_STATUS_CODES[code];
        } else {
            const parsed = Number(code);
            if (
                !isNaN(parsed) &&
                Object.prototype.hasOwnProperty.call(
                    HTTP_STATUS_DESCRIPTION,
                    parsed
                )
            ) {
                statusCode = parsed;
            } else {
                throw new Error(`Status code does not exist: ${code}`);
            }
        }
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }

    if (
        !Object.prototype.hasOwnProperty.call(
            HTTP_STATUS_DESCRIPTION,
            statusCode
        )
    ) {
        throw new Error(`Status code does not exist: ${code}`);
    }

    const statusText = HTTP_STATUS_DESCRIPTION[statusCode];

    if (init) {
        return {
            ...init,
            status: statusCode,
            statusText: init.statusText ?? statusText,
        };
    }

    return {
        status: statusCode,
        statusText,
    } as IResponseInit & T;
}
