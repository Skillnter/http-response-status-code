import { CODES } from "./codes.constant";
import { HTTP_STATUS_MAPPINGS } from "./http-status-codes.constant";
import { ClassLimits, ClassTypes } from "./class-limit.constant";
import {
    IHttpStatusCodes,
    IHttpStatusDescriptions,
    IHttpStatusNames,
} from "../interfaces";
import {
    listCodes,
    mapCodesToDescriptions,
    mapCodesToNames,
    mapNamesToCodes,
} from "../utils/mappers/index";

/**
 * A mapping of HTTP status codes to their respective status names.
 * @constant {IHttpStatusNames} HTTP_STATUS_NAMES - A mapping of HTTP status codes to their respective status names.
 * @type {Object<number, string>}
 */
const HTTP_STATUS_NAMES: IHttpStatusNames =
    mapCodesToNames(HTTP_STATUS_MAPPINGS);

/**
 * A mapping of HTTP status names to their respective status codes.
 * @constant {IHttpStatusCodes} HTTP_STATUS_CODES - A mapping of HTTP status names to their respective status codes.
 * @type {Object<string, number>}
 */
const HTTP_STATUS_CODES: IHttpStatusCodes =
    mapNamesToCodes(HTTP_STATUS_MAPPINGS);

/**
 * A mapping of HTTP status codes to their respective status descriptions.
 * @constant {IHttpStatusDescriptions} HTTP_STATUS_DESCRIPTION - A mapping of HTTP status codes to their respective status descriptions.
 * @type {Object<number, string>}
 */
const HTTP_STATUS_DESCRIPTION: IHttpStatusDescriptions =
    mapCodesToDescriptions(HTTP_STATUS_MAPPINGS);

/**
 * A List of all the informational HTTP status codes.
 * @constant {number[]} INFORMATIONAL_CODES - A List of all the informational HTTP status codes.
 * @type {number[]}
 */
const INFORMATIONAL_CODES: number[] = listCodes(
    ClassLimits,
    CODES,
    ClassTypes.INFORMATIONAL
);

/**
 * A List of all the success HTTP status codes.
 * @constant {number[]} SUCCESS_CODES - A List of all the success HTTP status codes.
 * @type {number[]}
 */
const SUCCESS_CODES: number[] = listCodes(
    ClassLimits,
    CODES,
    ClassTypes.SUCCESS
);

/**
 * A List of all the redirection HTTP status codes.
 * @constant {number[]} REDIRECTION_CODES - A List of all the redirection HTTP status codes.
 * @type {number[]}
 */
const REDIRECTION_CODES: number[] = listCodes(
    ClassLimits,
    CODES,
    ClassTypes.REDIRECTION
);

/**
 * A List of all the client side error HTTP status codes.
 * @constant {number[]} CLIENT_ERROR_CODES - A List of all the client side error HTTP status codes.
 * @type {number[]}
 */
const CLIENT_ERROR_CODES: number[] = listCodes(
    ClassLimits,
    CODES,
    ClassTypes.CLIENT_ERROR
);

/**
 * A List of all the server side error HTTP status codes.
 * @constant {number[]} SERVER_ERROR_CODES - A List of all the server side error HTTP status codes.
 * @type {number[]}
 */
const SERVER_ERROR_CODES: number[] = listCodes(
    ClassLimits,
    CODES,
    ClassTypes.SERVER_ERROR
);

export {
    CODES,
    HTTP_STATUS_MAPPINGS,
    HTTP_STATUS_NAMES,
    HTTP_STATUS_CODES,
    HTTP_STATUS_DESCRIPTION,
    ClassLimits,
    ClassTypes,
    INFORMATIONAL_CODES,
    SUCCESS_CODES,
    REDIRECTION_CODES,
    CLIENT_ERROR_CODES,
    SERVER_ERROR_CODES,
};
