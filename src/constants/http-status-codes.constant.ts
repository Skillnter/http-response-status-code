import { IHttpStatusMappings } from "../interfaces/";
import { CODES } from "./index";

/**
 * The HTTP status code mappings.
 * @constant {IHttpStatusMappings} HTTP_STATUS_MAPPINGS - The HTTP Status Code Mappings.
 * @type {Object<string, {code: number, description: string}>}
 */
export const HTTP_STATUS_MAPPINGS: IHttpStatusMappings = {
    CONTINUE: {
        code: CODES.HTTP_CODE_100,
        description: "Continue",
    },
    SWITCHING_PROTOCOLS: {
        code: CODES.HTTP_CODE_101,
        description: "Switching Protocols",
    },
    PROCESSING: {
        code: CODES.HTTP_CODE_102,
        description: "Processing",
    },
    EARLY_HINTS: {
        code: CODES.HTTP_CODE_103,
        description: "Early Hints",
    },
    TOO_LONG: {
        code: CODES.HTTP_CODE_122,
        description: "Too Long",
    },
    OK: {
        code: CODES.HTTP_CODE_200,
        description: "OK",
    },
    CREATED: {
        code: CODES.HTTP_CODE_201,
        description: "Created",
    },
    ACCEPTED: {
        code: CODES.HTTP_CODE_202,
        description: "Accepted",
    },
    NON_AUTHORITATIVE_INFORMATION: {
        code: CODES.HTTP_CODE_203,
        description: "Non Authoritative Information",
    },
    NO_CONTENT: {
        code: CODES.HTTP_CODE_204,
        description: "No Content",
    },
    RESET_CONTENT: {
        code: CODES.HTTP_CODE_205,
        description: "Reset Content",
    },
    PARTIAL_CONTENT: {
        code: CODES.HTTP_CODE_206,
        description: "Partial Content",
    },
    MULTI_STATUS: {
        code: CODES.HTTP_CODE_207,
        description: "Multi-Status",
    },
    ALREADY_REPORTED: {
        code: CODES.HTTP_CODE_208,
        description: "Already Reported",
    },
    IM_USED: {
        code: CODES.HTTP_CODE_226,
        description: "IM Used",
    },
    MULTIPLE_CHOICES: {
        code: CODES.HTTP_CODE_300,
        description: "Multiple Choices",
    },
    MOVED_PERMANENTLY: {
        code: CODES.HTTP_CODE_301,
        description: "Moved Permanently",
    },
    MOVED_TEMPORARILY: {
        code: CODES.HTTP_CODE_302,
        description: "Moved Temporarily",
    },
    SEE_OTHER: {
        code: CODES.HTTP_CODE_303,
        description: "See Other",
    },
    NOT_MODIFIED: {
        code: CODES.HTTP_CODE_304,
        description: "Not Modified",
    },
    USE_PROXY: {
        code: CODES.HTTP_CODE_305,
        description: "Use Proxy",
    },
    SWITCH_PROXY: {
        code: CODES.HTTP_CODE_306,
        description: "Switch Proxy",
    },
    TEMPORARY_REDIRECT: {
        code: CODES.HTTP_CODE_307,
        description: "Temporary Redirect",
    },
    PERMANENT_REDIRECT: {
        code: CODES.HTTP_CODE_308,
        description: "Permanent Redirect",
    },
    BAD_REQUEST: {
        code: CODES.HTTP_CODE_400,
        description: "Bad Request",
    },
    UNAUTHORIZED: {
        code: CODES.HTTP_CODE_401,
        description: "Unauthorized",
    },
    PAYMENT_REQUIRED: {
        code: CODES.HTTP_CODE_402,
        description: "Payment Required",
    },
    FORBIDDEN: {
        code: CODES.HTTP_CODE_403,
        description: "Forbidden",
    },
    NOT_FOUND: {
        code: CODES.HTTP_CODE_404,
        description: "Not Found",
    },
    METHOD_NOT_ALLOWED: {
        code: CODES.HTTP_CODE_405,
        description: "Method Not Allowed",
    },
    NOT_ACCEPTABLE: {
        code: CODES.HTTP_CODE_406,
        description: "Not Acceptable",
    },
    PROXY_AUTHENTICATION_REQUIRED: {
        code: CODES.HTTP_CODE_407,
        description: "Proxy Authentication Required",
    },
    REQUEST_TIMEOUT: {
        code: CODES.HTTP_CODE_408,
        description: "Request Timeout",
    },
    CONFLICT: {
        code: CODES.HTTP_CODE_409,
        description: "Conflict",
    },
    GONE: {
        code: CODES.HTTP_CODE_410,
        description: "Gone",
    },
    LENGTH_REQUIRED: {
        code: CODES.HTTP_CODE_411,
        description: "Length Required",
    },
    PRECONDITION_FAILED: {
        code: CODES.HTTP_CODE_412,
        description: "Precondition Failed",
    },
    REQUEST_TOO_LONG: {
        code: CODES.HTTP_CODE_413,
        description: "Request Entity Too Large",
    },
    REQUEST_URI_TOO_LONG: {
        code: CODES.HTTP_CODE_414,
        description: "Request-URI Too Long",
    },
    UNSUPPORTED_MEDIA_TYPE: {
        code: CODES.HTTP_CODE_415,
        description: "Unsupported Media Type",
    },
    REQUESTED_RANGE_NOT_SATISFIABLE: {
        code: CODES.HTTP_CODE_416,
        description: "Requested Range Not Satisfiable",
    },
    EXPECTATION_FAILED: {
        code: CODES.HTTP_CODE_417,
        description: "Expectation Failed",
    },
    IM_A_TEAPOT: {
        code: CODES.HTTP_CODE_418,
        description: "I'm a teapot",
    },
    INSUFFICIENT_SPACE_ON_RESOURCE: {
        code: CODES.HTTP_CODE_419,
        description: "Insufficient Space on Resource",
    },
    METHOD_FAILURE: {
        code: CODES.HTTP_CODE_420,
        description: "Method Failure",
    },
    MISDIRECTED_REQUEST: {
        code: CODES.HTTP_CODE_421,
        description: "Misdirected Request",
    },
    UNPROCESSABLE_ENTITY: {
        code: CODES.HTTP_CODE_422,
        description: "Unprocessable Entity",
    },
    LOCKED: {
        code: CODES.HTTP_CODE_423,
        description: "Locked",
    },
    FAILED_DEPENDENCY: {
        code: CODES.HTTP_CODE_424,
        description: "Failed Dependency",
    },
    TOO_EARLY: {
        code: CODES.HTTP_CODE_425,
        description: "Too Early",
    },
    UPGRADE_REQUIRED: {
        code: CODES.HTTP_CODE_426,
        description: "Upgrade Required",
    },
    PRECONDITION_REQUIRED: {
        code: CODES.HTTP_CODE_428,
        description: "Precondition Required",
    },
    TOO_MANY_REQUESTS: {
        code: CODES.HTTP_CODE_429,
        description: "Too Many Requests",
    },
    REQUEST_HEADER_FIELDS_TOO_LARGE: {
        code: CODES.HTTP_CODE_431,
        description: "Request Header Fields Too Large",
    },
    UNAVAILABLE_FOR_LEGAL_REASONS: {
        code: CODES.HTTP_CODE_451,
        description: "Unavailable For Legal Reasons",
    },
    INTERNAL_SERVER_ERROR: {
        code: CODES.HTTP_CODE_500,
        description: "Internal Server Error",
    },
    NOT_IMPLEMENTED: {
        code: CODES.HTTP_CODE_501,
        description: "Not Implemented",
    },
    BAD_GATEWAY: {
        code: CODES.HTTP_CODE_502,
        description: "Bad Gateway",
    },
    SERVICE_UNAVAILABLE: {
        code: CODES.HTTP_CODE_503,
        description: "Service Unavailable",
    },
    GATEWAY_TIMEOUT: {
        code: CODES.HTTP_CODE_504,
        description: "Gateway Timeout",
    },
    HTTP_VERSION_NOT_SUPPORTED: {
        code: CODES.HTTP_CODE_505,
        description: "HTTP Version Not Supported",
    },
    VARIANT_ALSO_NEGOTIATES: {
        code: CODES.HTTP_CODE_506,
        description: "Variant Also Negotiates",
    },
    INSUFFICIENT_STORAGE: {
        code: CODES.HTTP_CODE_507,
        description: "Insufficient Storage",
    },
    LOOP_DETECTED: {
        code: CODES.HTTP_CODE_508,
        description: "Loop Detected",
    },
    NOT_EXTENDED: {
        code: CODES.HTTP_CODE_510,
        description: "Not Extended",
    },
    NETWORK_AUTHENTICATION_REQUIRED: {
        code: CODES.HTTP_CODE_511,
        description: "Network Authentication Required",
    },
};
