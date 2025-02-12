/**
 * Represents a module.
 * @module STATUS_CODES
 */
import {
    checkClientError,
    checkInformational,
    checkRedirectional,
    checkServerError,
    checkSuccess,
    checkValidStatusCode,
    listClientErrorCodes,
    listInformationalCodes,
    listRedirectionalCodes,
    listServerErrorCodes,
    listSuccessCodes,
} from "./utils";

const RADIX = 10;

// eslint-disable-next-line
enum CODES {
    HTTP_CODE_100 = 100,
    HTTP_CODE_101 = 101,
    HTTP_CODE_102 = 102,
    HTTP_CODE_103 = 103,
    HTTP_CODE_122 = 122,
    HTTP_CODE_200 = 200,
    HTTP_CODE_201 = 201,
    HTTP_CODE_202 = 202,
    HTTP_CODE_203 = 203,
    HTTP_CODE_204 = 204,
    HTTP_CODE_205 = 205,
    HTTP_CODE_206 = 206,
    HTTP_CODE_207 = 207,
    HTTP_CODE_208 = 208,
    HTTP_CODE_226 = 226,
    HTTP_CODE_300 = 300,
    HTTP_CODE_301 = 301,
    HTTP_CODE_302 = 302,
    HTTP_CODE_303 = 303,
    HTTP_CODE_304 = 304,
    HTTP_CODE_305 = 305,
    HTTP_CODE_306 = 306,
    HTTP_CODE_307 = 307,
    HTTP_CODE_308 = 308,
    HTTP_CODE_400 = 400,
    HTTP_CODE_401 = 401,
    HTTP_CODE_402 = 402,
    HTTP_CODE_403 = 403,
    HTTP_CODE_404 = 404,
    HTTP_CODE_405 = 405,
    HTTP_CODE_406 = 406,
    HTTP_CODE_407 = 407,
    HTTP_CODE_408 = 408,
    HTTP_CODE_409 = 409,
    HTTP_CODE_410 = 410,
    HTTP_CODE_411 = 411,
    HTTP_CODE_412 = 412,
    HTTP_CODE_413 = 413,
    HTTP_CODE_414 = 414,
    HTTP_CODE_415 = 415,
    HTTP_CODE_416 = 416,
    HTTP_CODE_417 = 417,
    HTTP_CODE_418 = 418,
    HTTP_CODE_419 = 419,
    HTTP_CODE_420 = 420,
    HTTP_CODE_421 = 421,
    HTTP_CODE_422 = 422,
    HTTP_CODE_423 = 423,
    HTTP_CODE_424 = 424,
    HTTP_CODE_425 = 425,
    HTTP_CODE_426 = 426,
    HTTP_CODE_428 = 428,
    HTTP_CODE_429 = 429,
    HTTP_CODE_431 = 431,
    HTTP_CODE_451 = 451,
    HTTP_CODE_500 = 500,
    HTTP_CODE_501 = 501,
    HTTP_CODE_502 = 502,
    HTTP_CODE_503 = 503,
    HTTP_CODE_504 = 504,
    HTTP_CODE_505 = 505,
    HTTP_CODE_506 = 506,
    HTTP_CODE_507 = 507,
    HTTP_CODE_508 = 508,
    HTTP_CODE_510 = 510,
    HTTP_CODE_511 = 511,
}
// eslint-disable-next-line
const MODULE: any = {
    CODES,
};
// eslint-disable-next-line
const STATUS_CODES: any = {};

STATUS_CODES[(MODULE.CONTINUE = MODULE.CODES.HTTP_CODE_100)] = "Continue";
STATUS_CODES[(MODULE.SWITCHING_PROTOCOLS = MODULE.CODES.HTTP_CODE_101)] =
    "Switching Protocols";
STATUS_CODES[(MODULE.PROCESSING = MODULE.CODES.HTTP_CODE_102)] = "Processing";
STATUS_CODES[(MODULE.EARLY_HINTS = MODULE.CODES.HTTP_CODE_103)] = "Early Hints";
STATUS_CODES[(MODULE.TOO_LONG = MODULE.CODES.HTTP_CODE_122)] = "Too Long";

STATUS_CODES[(MODULE.OK = MODULE.CODES.HTTP_CODE_200)] = "OK";
STATUS_CODES[(MODULE.CREATED = MODULE.CODES.HTTP_CODE_201)] = "Created";
STATUS_CODES[(MODULE.ACCEPTED = MODULE.CODES.HTTP_CODE_202)] = "Accepted";
STATUS_CODES[
    (MODULE.NON_AUTHORITATIVE_INFORMATION = MODULE.CODES.HTTP_CODE_203)
] = "Non Authoritative Information";
STATUS_CODES[(MODULE.NO_CONTENT = MODULE.CODES.HTTP_CODE_204)] = "No Content";
STATUS_CODES[(MODULE.RESET_CONTENT = MODULE.CODES.HTTP_CODE_205)] =
    "Reset Content";
STATUS_CODES[(MODULE.PARTIAL_CONTENT = MODULE.CODES.HTTP_CODE_206)] =
    "Partial Content";
STATUS_CODES[(MODULE.MULTI_STATUS = MODULE.CODES.HTTP_CODE_207)] =
    "Multi-Status";
STATUS_CODES[(MODULE.ALREADY_REPORTED = MODULE.CODES.HTTP_CODE_208)] =
    "Already Reported";
STATUS_CODES[(MODULE.IM_USED = MODULE.CODES.HTTP_CODE_226)] = "IM Used";

STATUS_CODES[(MODULE.MULTIPLE_CHOICES = MODULE.CODES.HTTP_CODE_300)] =
    "Multiple Choices";
STATUS_CODES[(MODULE.MOVED_PERMANENTLY = MODULE.CODES.HTTP_CODE_301)] =
    "Moved Permanently";
STATUS_CODES[(MODULE.MOVED_TEMPORARILY = MODULE.CODES.HTTP_CODE_302)] =
    "Moved Temporarily";
STATUS_CODES[(MODULE.SEE_OTHER = MODULE.CODES.HTTP_CODE_303)] = "See Other";
STATUS_CODES[(MODULE.NOT_MODIFIED = MODULE.CODES.HTTP_CODE_304)] =
    "Not Modified";
STATUS_CODES[(MODULE.USE_PROXY = MODULE.CODES.HTTP_CODE_305)] = "Use Proxy";
STATUS_CODES[(MODULE.SWITCH_PROXY = MODULE.CODES.HTTP_CODE_306)] =
    "Switch Proxy";
STATUS_CODES[(MODULE.TEMPORARY_REDIRECT = MODULE.CODES.HTTP_CODE_307)] =
    "Temporary Redirect";
STATUS_CODES[(MODULE.PERMANENT_REDIRECT = MODULE.CODES.HTTP_CODE_308)] =
    "Permanent Redirect";

STATUS_CODES[(MODULE.BAD_REQUEST = MODULE.CODES.HTTP_CODE_400)] = "Bad Request";
STATUS_CODES[(MODULE.UNAUTHORIZED = MODULE.CODES.HTTP_CODE_401)] =
    "Unauthorized";
STATUS_CODES[(MODULE.PAYMENT_REQUIRED = MODULE.CODES.HTTP_CODE_402)] =
    "Payment Required";
STATUS_CODES[(MODULE.FORBIDDEN = MODULE.CODES.HTTP_CODE_403)] = "Forbidden";
STATUS_CODES[(MODULE.NOT_FOUND = MODULE.CODES.HTTP_CODE_404)] = "Not Found";
STATUS_CODES[(MODULE.METHOD_NOT_ALLOWED = MODULE.CODES.HTTP_CODE_405)] =
    "Method Not Allowed";
STATUS_CODES[(MODULE.NOT_ACCEPTABLE = MODULE.CODES.HTTP_CODE_406)] =
    "Not Acceptable";
STATUS_CODES[
    (MODULE.PROXY_AUTHENTICATION_REQUIRED = MODULE.CODES.HTTP_CODE_407)
] = "Proxy Authentication Required";
STATUS_CODES[(MODULE.REQUEST_TIMEOUT = MODULE.CODES.HTTP_CODE_408)] =
    "Request Timeout";
STATUS_CODES[(MODULE.CONFLICT = MODULE.CODES.HTTP_CODE_409)] = "Conflict";
STATUS_CODES[(MODULE.GONE = MODULE.CODES.HTTP_CODE_410)] = "Gone";
STATUS_CODES[(MODULE.LENGTH_REQUIRED = MODULE.CODES.HTTP_CODE_411)] =
    "Length Required";
STATUS_CODES[(MODULE.PRECONDITION_FAILED = MODULE.CODES.HTTP_CODE_412)] =
    "Precondition Failed";
STATUS_CODES[(MODULE.REQUEST_TOO_LONG = MODULE.CODES.HTTP_CODE_413)] =
    "Request Entity Too Large";
STATUS_CODES[(MODULE.REQUEST_URI_TOO_LONG = MODULE.CODES.HTTP_CODE_414)] =
    "Request-URI Too Long";
STATUS_CODES[(MODULE.UNSUPPORTED_MEDIA_TYPE = MODULE.CODES.HTTP_CODE_415)] =
    "Unsupported Media Type";
STATUS_CODES[
    (MODULE.REQUESTED_RANGE_NOT_SATISFIABLE = MODULE.CODES.HTTP_CODE_416)
] = "Requested Range Not Satisfiable";

STATUS_CODES[(MODULE.EXPECTATION_FAILED = MODULE.CODES.HTTP_CODE_417)] =
    "Expectation Failed";
STATUS_CODES[(MODULE.IM_A_TEAPOT = MODULE.CODES.HTTP_CODE_418)] =
    "I'm a teapot";
STATUS_CODES[
    (MODULE.INSUFFICIENT_SPACE_ON_RESOURCE = MODULE.CODES.HTTP_CODE_419)
] = "Insufficient Space on Resource";
STATUS_CODES[(MODULE.METHOD_FAILURE = MODULE.CODES.HTTP_CODE_420)] =
    "Method Failure";
STATUS_CODES[(MODULE.MISDIRECTED_REQUEST = MODULE.CODES.HTTP_CODE_421)] =
    "Misdirected Request";
STATUS_CODES[(MODULE.UNPROCESSABLE_ENTITY = MODULE.CODES.HTTP_CODE_422)] =
    "Unprocessable Entity";
STATUS_CODES[(MODULE.LOCKED = MODULE.CODES.HTTP_CODE_423)] = "Locked";
STATUS_CODES[(MODULE.FAILED_DEPENDENCY = MODULE.CODES.HTTP_CODE_424)] =
    "Failed Dependency";
STATUS_CODES[(MODULE.TOO_EARLY = MODULE.CODES.HTTP_CODE_425)] = "Too Early";
STATUS_CODES[(MODULE.UPGRADE_REQUIRED = MODULE.CODES.HTTP_CODE_426)] =
    "Upgrade Required";
STATUS_CODES[(MODULE.PRECONDITION_REQUIRED = MODULE.CODES.HTTP_CODE_428)] =
    "Precondition Required";
STATUS_CODES[(MODULE.TOO_MANY_REQUESTS = MODULE.CODES.HTTP_CODE_429)] =
    "Too Many Requests";
STATUS_CODES[
    (MODULE.REQUEST_HEADER_FIELDS_TOO_LARGE = MODULE.CODES.HTTP_CODE_431)
] = "Request Header Fields Too Large";
STATUS_CODES[
    (MODULE.UNAVAILABLE_FOR_LEGAL_REASONS = MODULE.CODES.HTTP_CODE_451)
] = "Unavailable For Legal Reasons";

STATUS_CODES[(MODULE.INTERNAL_SERVER_ERROR = MODULE.CODES.HTTP_CODE_500)] =
    "Internal Server Error";
STATUS_CODES[(MODULE.NOT_IMPLEMENTED = MODULE.CODES.HTTP_CODE_501)] =
    "Not Implemented";
STATUS_CODES[(MODULE.BAD_GATEWAY = MODULE.CODES.HTTP_CODE_502)] = "Bad Gateway";
STATUS_CODES[(MODULE.SERVICE_UNAVAILABLE = MODULE.CODES.HTTP_CODE_503)] =
    "Service Unavailable";
STATUS_CODES[(MODULE.GATEWAY_TIMEOUT = MODULE.CODES.HTTP_CODE_504)] =
    "Gateway Timeout";
STATUS_CODES[(MODULE.HTTP_VERSION_NOT_SUPPORTED = MODULE.CODES.HTTP_CODE_505)] =
    "HTTP Version Not Supported";
STATUS_CODES[(MODULE.VARIANT_ALSO_NEGOTIATES = MODULE.CODES.HTTP_CODE_506)] =
    "Variant Also Negotiates";
STATUS_CODES[(MODULE.INSUFFICIENT_STORAGE = MODULE.CODES.HTTP_CODE_507)] =
    "Insufficient Storage";
STATUS_CODES[(MODULE.LOOP_DETECTED = MODULE.CODES.HTTP_CODE_508)] =
    "Loop Detected";
STATUS_CODES[(MODULE.NOT_EXTENDED = MODULE.CODES.HTTP_CODE_510)] =
    "Not Extended";
STATUS_CODES[
    (MODULE.NETWORK_AUTHENTICATION_REQUIRED = MODULE.CODES.HTTP_CODE_511)
] = "Network Authentication Required";

/**
 * Returns the HTTP status code from code name.
 * @name getStatusCode
 * @param {string} name - The name of the Status code.
 * @returns {number}
 */
MODULE.getStatusCode = function (name: string) {
    if (
        Object.prototype.hasOwnProperty.call(MODULE, `${name}`) &&
        typeof MODULE[`${name}`] === "number"
    ) {
        return MODULE[`${name}`];
    } else {
        throw new Error(`Status code does not exist: ${name}`);
    }
};

/**
 * Returns the status name from HTTP status code.
 * @name getStatusName
 * @param {number} code - The Status Code Number.
 * @returns {string}
 */
MODULE.getStatusName = function (code: number) {
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        const keys = Object.keys(MODULE);
        for (let i = 0; i < keys.length; i++) {
            if (MODULE[keys[parseInt(`${i}`, RADIX)]] === code) {
                return keys[parseInt(`${i}`, RADIX)];
            }
        }
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns the status description from HTTP status code.
 * @name getStatusDescription
 * @param {number} code - The Status Code Number.
 * @returns {string}
 */
MODULE.getStatusDescription = function (code: number) {
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return STATUS_CODES[`${code}`];
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Determines whether the specified status code represents an informational status.
 * @name isInformational
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is informational, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
MODULE.isInformational = function (code: number) {
    return checkInformational(STATUS_CODES, code);
};

/**
 * Returns all the informational HTTP status codes.
 * @name getInformationalCodes
 * @returns {Array<number>} An array of all the informational HTTP status codes.
 */
MODULE.getInformationalCodes = function () {
    return listInformationalCodes(STATUS_CODES);
};

/**
 * Determines whether the specified status code represents a success status.
 * @name isSuccess
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is success, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
MODULE.isSuccess = function (code: number) {
    return checkSuccess(STATUS_CODES, code);
};

/**
 * Returns all the success HTTP status codes.
 * @name getSuccessCodes
 * @returns {Array<number>} An array of all the success HTTP status codes.
 */
MODULE.getSuccessCodes = function () {
    return listSuccessCodes(STATUS_CODES);
};

/**
 * Determines whether the specified status code represents a redirectional status.
 * @name isRedirectional
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is redirectional, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
MODULE.isRedirectional = function (code: number) {
    return checkRedirectional(STATUS_CODES, code);
};

/**
 * Returns all the redirectional HTTP status codes.
 * @name getRedirectionalCodes
 * @returns {Array<number>} An array of all the redirectional HTTP status codes.
 */
MODULE.getRedirectionalCodes = function () {
    return listRedirectionalCodes(STATUS_CODES);
};

/**
 * Determines whether the specified status code represents a client side error status.
 * @name isClientError
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is client error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
MODULE.isClientError = function (code: number) {
    return checkClientError(STATUS_CODES, code);
};

/**
 * Returns all the client side error HTTP status codes.
 * @name getClientErrorCodes
 * @returns {Array<number>} An array of all the client side error HTTP status codes.
 */
MODULE.getClientErrorCodes = function () {
    return listClientErrorCodes(STATUS_CODES);
};

/**
 * Determines whether the specified status code represents a server side error status.
 * @name isServerError
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is server error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
MODULE.isServerError = function (code: number) {
    return checkServerError(STATUS_CODES, code);
};

/**
 * Returns all the server side error HTTP status codes.
 * @name getServerErrorCodes
 * @returns {Array<number>} An array of all the server side error HTTP status codes.
 */
MODULE.getServerErrorCodes = function () {
    return listServerErrorCodes(STATUS_CODES);
};

/**
 * Validates whether the provided status code is recognized as valid.
 * @name isValidStatusCode
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is valid, false otherwise.
 */
MODULE.isValidStatusCode = function (code: number) {
    return checkValidStatusCode(STATUS_CODES, code);
};

Object.freeze(MODULE);
export = MODULE;
