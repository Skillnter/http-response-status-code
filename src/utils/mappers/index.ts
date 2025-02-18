import { CODES } from "../../constants";
import {
    IClassLimits,
    ICodeList,
    IHttpStatusCodes,
    IHttpStatusDescriptions,
    IHttpStatusMappings,
    IHttpStatusNames,
} from "../../interfaces";

/**
 * A mapping of HTTP status codes to their respective status names.
 * @param {IHttpStatusMappings} httpStatusMappings - The HTTP status code mappings.
 * @returns {IHttpStatusNames} A mapping of HTTP status codes to their respective status names.
 * @type {Object<number, string>}
 */
export function mapCodesToNames(
    httpStatusMappings: IHttpStatusMappings
): IHttpStatusNames {
    const result: IHttpStatusNames = {};
    for (const key in httpStatusMappings) {
        if (Object.prototype.hasOwnProperty.call(httpStatusMappings, key)) {
            result[httpStatusMappings[key].code] = key;
        }
    }
    return Object.freeze(result);
}

/**
 * A mapping of HTTP status code names to their respective status codes.
 * @param {IHttpStatusMappings} httpStatusMappings - The HTTP status code mappings.
 * @returns {IHttpStatusCodes} A mapping of HTTP status code names to their respective status codes.
 * @type {Object<string, number>}
 */
export function mapNamesToCodes(
    httpStatusMappings: IHttpStatusMappings
): IHttpStatusCodes {
    const result: IHttpStatusCodes = {};
    for (const key in httpStatusMappings) {
        if (Object.prototype.hasOwnProperty.call(httpStatusMappings, key)) {
            result[key] = httpStatusMappings[key].code;
        }
    }
    return Object.freeze(result);
}

/**
 * A mapping of HTTP status codes to their respective status descriptions.
 * @param {IHttpStatusMappings} httpStatusMappings - The HTTP status code mappings.
 * @returns {IHttpStatusDescriptions} A mapping of HTTP status codes to their respective status descriptions.
 * @type {Object<number, string>}
 */
export function mapCodesToDescriptions(
    httpStatusMappings: IHttpStatusMappings
): IHttpStatusDescriptions {
    const result: IHttpStatusDescriptions = {};
    for (const key in httpStatusMappings) {
        if (Object.prototype.hasOwnProperty.call(httpStatusMappings, key)) {
            result[httpStatusMappings[key].code] =
                httpStatusMappings[key].description;
        }
    }
    return Object.freeze(result);
}

/**
 * Provides a list of HTTP status codes for a given type.
 * @param {IClassLimits} classLimits - The class limits for HTTP status codes.
 * @param {typeof CODES} codesEnum - The enumeration of HTTP status codes.
 * @param {string} type - The type of HTTP status code to list.
 * @returns {(ICodeList | Error)} A list of HTTP status codes for the given type, or an error if the type does not exist.
 * @type {Object<number, string>}
 */
export function listCodes(
    classLimits: IClassLimits,
    codesEnum: typeof CODES,
    type: string
): ICodeList | Error {
    const codes = [];
    if (Object.prototype.hasOwnProperty.call(classLimits, type)) {
        for (
            let code = classLimits[type].MIN;
            code <= classLimits[type].MAX;
            code++
        ) {
            if (Object.prototype.hasOwnProperty.call(codesEnum, code)) {
                codes.push(code);
            }
        }
        return Object.freeze(codes);
    }
    throw new Error(`Type of HTTP status does not exist: ${type}`);
}
