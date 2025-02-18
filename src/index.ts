import { CODES, HTTP_STATUS_MAPPINGS } from "./constants";
import {
    getStatusCode,
    getStatusName,
    getStatusDescription,
    isInformational,
    isSuccess,
    isRedirectional,
    isClientError,
    isServerError,
    getInformationalCodes,
    getSuccessCodes,
    getRedirectionalCodes,
    getClientErrorCodes,
    getServerErrorCodes,
    isValidStatusCode,
} from "./utils";

export {
    CODES,
    getStatusCode,
    getStatusName,
    getStatusDescription,
    isInformational,
    isSuccess,
    isRedirectional,
    isClientError,
    isServerError,
    getInformationalCodes,
    getSuccessCodes,
    getRedirectionalCodes,
    getClientErrorCodes,
    getServerErrorCodes,
    isValidStatusCode,
};

/**
 * HTTP status code for "Continue" (100).
 *
 * @constant {number}
 */
export const CONTINUE = HTTP_STATUS_MAPPINGS.CONTINUE.code;

/**
 * HTTP status code for "Switching Protocols" (101).
 *
 * @constant {number}
 */
export const SWITCHING_PROTOCOLS =
    HTTP_STATUS_MAPPINGS.SWITCHING_PROTOCOLS.code;

/**
 * HTTP status code for "Processing" (102).
 *
 * @constant {number}
 */
export const PROCESSING = HTTP_STATUS_MAPPINGS.PROCESSING.code;

/**
 * HTTP status code for "Early Hints" (103).
 *
 * @constant {number}
 */
export const EARLY_HINTS = HTTP_STATUS_MAPPINGS.EARLY_HINTS.code;

/**
 * HTTP status code for "Too Long" (122).
 *
 * @constant {number}
 */
export const TOO_LONG = HTTP_STATUS_MAPPINGS.TOO_LONG.code;

/**
 * HTTP status code for "OK" (200).
 *
 * @constant {number}
 */
export const OK = HTTP_STATUS_MAPPINGS.OK.code;

/**
 * HTTP status code for "Created" (201).
 *
 * @constant {number}
 */
export const CREATED = HTTP_STATUS_MAPPINGS.CREATED.code;

/**
 * HTTP status code for "Accepted" (202).
 *
 * @constant {number}
 */
export const ACCEPTED = HTTP_STATUS_MAPPINGS.ACCEPTED.code;

/**
 * HTTP status code for "Non Authoritative Information" (203).
 *
 * @constant {number}
 */
export const NON_AUTHORITATIVE_INFORMATION =
    HTTP_STATUS_MAPPINGS.NON_AUTHORITATIVE_INFORMATION.code;

/**
 * HTTP status code for "No Content" (204).
 *
 * @constant {number}
 */
export const NO_CONTENT = HTTP_STATUS_MAPPINGS.NO_CONTENT.code;

/**
 * HTTP status code for "Reset Content" (205).
 *
 * @constant {number}
 */
export const RESET_CONTENT = HTTP_STATUS_MAPPINGS.RESET_CONTENT.code;

/**
 * HTTP status code for "Partial Content" (206).
 *
 * @constant {number}
 */
export const PARTIAL_CONTENT = HTTP_STATUS_MAPPINGS.PARTIAL_CONTENT.code;

/**
 * HTTP status code for "Multi-Status" (207).
 *
 * @constant {number}
 */
export const MULTI_STATUS = HTTP_STATUS_MAPPINGS.MULTI_STATUS.code;

/**
 * HTTP status code for "Already Reported" (208).
 *
 * @constant {number}
 */
export const ALREADY_REPORTED = HTTP_STATUS_MAPPINGS.ALREADY_REPORTED.code;

/**
 * HTTP status code for "IM Used" (226).
 *
 * @constant {number}
 */
export const IM_USED = HTTP_STATUS_MAPPINGS.IM_USED.code;

/**
 * HTTP status code for "Multiple Choices" (300).
 *
 * @constant {number}
 */
export const MULTIPLE_CHOICES = HTTP_STATUS_MAPPINGS.MULTIPLE_CHOICES.code;

/**
 * HTTP status code for "Moved Permanently" (301).
 *
 * @constant {number}
 */
export const MOVED_PERMANENTLY = HTTP_STATUS_MAPPINGS.MOVED_PERMANENTLY.code;

/**
 * HTTP status code for "Moved Temporarily" (302).
 *
 * @constant {number}
 */
export const MOVED_TEMPORARILY = HTTP_STATUS_MAPPINGS.MOVED_TEMPORARILY.code;

/**
 * HTTP status code for "See Other" (303).
 *
 * @constant {number}
 */
export const SEE_OTHER = HTTP_STATUS_MAPPINGS.SEE_OTHER.code;

/**
 * HTTP status code for "Not Modified" (304).
 *
 * @constant {number}
 */
export const NOT_MODIFIED = HTTP_STATUS_MAPPINGS.NOT_MODIFIED.code;

/**
 * HTTP status code for "Use Proxy" (305).
 *
 * @constant {number}
 */
export const USE_PROXY = HTTP_STATUS_MAPPINGS.USE_PROXY.code;

/**
 * HTTP status code for "Switch Proxy" (306).
 *
 * @constant {number}
 */
export const SWITCH_PROXY = HTTP_STATUS_MAPPINGS.SWITCH_PROXY.code;

/**
 * HTTP status code for "Temporary Redirect" (307).
 *
 * @constant {number}
 */
export const TEMPORARY_REDIRECT = HTTP_STATUS_MAPPINGS.TEMPORARY_REDIRECT.code;

/**
 * HTTP status code for "Permanent Redirect" (308).
 *
 * @constant {number}
 */
export const PERMANENT_REDIRECT = HTTP_STATUS_MAPPINGS.PERMANENT_REDIRECT.code;

/**
 * HTTP status code for "Bad Request" (400).
 *
 * @constant {number}
 */
export const BAD_REQUEST = HTTP_STATUS_MAPPINGS.BAD_REQUEST.code;

/**
 * HTTP status code for "Unauthorized" (401).
 *
 * @constant {number}
 */
export const UNAUTHORIZED = HTTP_STATUS_MAPPINGS.UNAUTHORIZED.code;

/**
 * HTTP status code for "Payment Required" (402).
 *
 * @constant {number}
 */
export const PAYMENT_REQUIRED = HTTP_STATUS_MAPPINGS.PAYMENT_REQUIRED.code;

/**
 * HTTP status code for "Forbidden" (403).
 *
 * @constant {number}
 */
export const FORBIDDEN = HTTP_STATUS_MAPPINGS.FORBIDDEN.code;

/**
 * HTTP status code for "Not Found" (404).
 *
 * @constant {number}
 */
export const NOT_FOUND = HTTP_STATUS_MAPPINGS.NOT_FOUND.code;

/**
 * HTTP status code for "Method Not Allowed" (405).
 *
 * @constant {number}
 */
export const METHOD_NOT_ALLOWED = HTTP_STATUS_MAPPINGS.METHOD_NOT_ALLOWED.code;

/**
 * HTTP status code for "Not Acceptable" (406).
 *
 * @constant {number}
 */
export const NOT_ACCEPTABLE = HTTP_STATUS_MAPPINGS.NOT_ACCEPTABLE.code;

/**
 * HTTP status code for "Proxy Authentication Required" (407).
 *
 * @constant {number}
 */
export const PROXY_AUTHENTICATION_REQUIRED =
    HTTP_STATUS_MAPPINGS.PROXY_AUTHENTICATION_REQUIRED.code;

/**
 * HTTP status code for "Request Timeout" (408).
 *
 * @constant {number}
 */
export const REQUEST_TIMEOUT = HTTP_STATUS_MAPPINGS.REQUEST_TIMEOUT.code;

/**
 * HTTP status code for "Conflict" (409).
 *
 * @constant {number}
 */
export const CONFLICT = HTTP_STATUS_MAPPINGS.CONFLICT.code;

/**
 * HTTP status code for "Gone" (410).
 *
 * @constant {number}
 */
export const GONE = HTTP_STATUS_MAPPINGS.GONE.code;

/**
 * HTTP status code for "Length Required" (411).
 *
 * @constant {number}
 */
export const LENGTH_REQUIRED = HTTP_STATUS_MAPPINGS.LENGTH_REQUIRED.code;

/**
 * HTTP status code for "Precondition Failed" (412).
 *
 * @constant {number}
 */
export const PRECONDITION_FAILED =
    HTTP_STATUS_MAPPINGS.PRECONDITION_FAILED.code;

/**
 * HTTP status code for "Request Entity Too Large" (413).
 *
 * @constant {number}
 */
export const REQUEST_TOO_LONG = HTTP_STATUS_MAPPINGS.REQUEST_TOO_LONG.code;

/**
 * HTTP status code for "Request-URI Too Long" (414).
 *
 * @constant {number}
 */
export const REQUEST_URI_TOO_LONG =
    HTTP_STATUS_MAPPINGS.REQUEST_URI_TOO_LONG.code;

/**
 * HTTP status code for "Unsupported Media Type" (415).
 *
 * @constant {number}
 */
export const UNSUPPORTED_MEDIA_TYPE =
    HTTP_STATUS_MAPPINGS.UNSUPPORTED_MEDIA_TYPE.code;

/**
 * HTTP status code for "Requested Range Not Satisfiable" (416).
 *
 * @constant {number}
 */
export const REQUESTED_RANGE_NOT_SATISFIABLE =
    HTTP_STATUS_MAPPINGS.REQUESTED_RANGE_NOT_SATISFIABLE.code;

/**
 * HTTP status code for "Expectation Failed" (417).
 *
 * @constant {number}
 */
export const EXPECTATION_FAILED = HTTP_STATUS_MAPPINGS.EXPECTATION_FAILED.code;

/**
 * HTTP status code for "I'm a teapot" (418).
 *
 * @constant {number}
 */
export const IM_A_TEAPOT = HTTP_STATUS_MAPPINGS.IM_A_TEAPOT.code;

/**
 * HTTP status code for "Insufficient Space on Resource" (419).
 *
 * @constant {number}
 */
export const INSUFFICIENT_SPACE_ON_RESOURCE =
    HTTP_STATUS_MAPPINGS.INSUFFICIENT_SPACE_ON_RESOURCE.code;

/**
 * HTTP status code for "Method Failure" (420).
 *
 * @constant {number}
 */
export const METHOD_FAILURE = HTTP_STATUS_MAPPINGS.METHOD_FAILURE.code;

/**
 * HTTP status code for "Misdirected Request" (421).
 *
 * @constant {number}
 */
export const MISDIRECTED_REQUEST =
    HTTP_STATUS_MAPPINGS.MISDIRECTED_REQUEST.code;

/**
 * HTTP status code for "Unprocessable Entity" (422).
 *
 * @constant {number}
 */
export const UNPROCESSABLE_ENTITY =
    HTTP_STATUS_MAPPINGS.UNPROCESSABLE_ENTITY.code;

/**
 * HTTP status code for "Locked" (423).
 *
 * @constant {number}
 */
export const LOCKED = HTTP_STATUS_MAPPINGS.LOCKED.code;

/**
 * HTTP status code for "Failed Dependency" (424).
 *
 * @constant {number}
 */
export const FAILED_DEPENDENCY = HTTP_STATUS_MAPPINGS.FAILED_DEPENDENCY.code;

/**
 * HTTP status code for "Too Early" (425).
 *
 * @constant {number}
 */
export const TOO_EARLY = HTTP_STATUS_MAPPINGS.TOO_EARLY.code;

/**
 * HTTP status code for "Upgrade Required" (426).
 *
 * @constant {number}
 */
export const UPGRADE_REQUIRED = HTTP_STATUS_MAPPINGS.UPGRADE_REQUIRED.code;

/**
 * HTTP status code for "Precondition Required" (428).
 *
 * @constant {number}
 */
export const PRECONDITION_REQUIRED =
    HTTP_STATUS_MAPPINGS.PRECONDITION_REQUIRED.code;

/**
 * HTTP status code for "Too Many Requests" (429).
 *
 * @constant {number}
 */
export const TOO_MANY_REQUESTS = HTTP_STATUS_MAPPINGS.TOO_MANY_REQUESTS.code;

/**
 * HTTP status code for "Request Header Fields Too Large" (431).
 *
 * @constant {number}
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE =
    HTTP_STATUS_MAPPINGS.REQUEST_HEADER_FIELDS_TOO_LARGE.code;

/**
 * HTTP status code for "Unavailable For Legal Reasons" (451).
 *
 * @constant {number}
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS =
    HTTP_STATUS_MAPPINGS.UNAVAILABLE_FOR_LEGAL_REASONS.code;

/**
 * HTTP status code for "Internal Server Error" (500).
 *
 * @constant {number}
 */
export const INTERNAL_SERVER_ERROR =
    HTTP_STATUS_MAPPINGS.INTERNAL_SERVER_ERROR.code;

/**
 * HTTP status code for "Not Implemented" (501).
 *
 * @constant {number}
 */
export const NOT_IMPLEMENTED = HTTP_STATUS_MAPPINGS.NOT_IMPLEMENTED.code;

/**
 * HTTP status code for "Bad Gateway" (502).
 *
 * @constant {number}
 */
export const BAD_GATEWAY = HTTP_STATUS_MAPPINGS.BAD_GATEWAY.code;

/**
 * HTTP status code for "Service Unavailable" (503).
 *
 * @constant {number}
 */
export const SERVICE_UNAVAILABLE =
    HTTP_STATUS_MAPPINGS.SERVICE_UNAVAILABLE.code;

/**
 * HTTP status code for "Gateway Timeout" (504).
 *
 * @constant {number}
 */
export const GATEWAY_TIMEOUT = HTTP_STATUS_MAPPINGS.GATEWAY_TIMEOUT.code;

/**
 * HTTP status code for "HTTP Version Not Supported" (505).
 *
 * @constant {number}
 */
export const HTTP_VERSION_NOT_SUPPORTED =
    HTTP_STATUS_MAPPINGS.HTTP_VERSION_NOT_SUPPORTED.code;

/**
 * HTTP status code for "Variant Also Negotiates" (506).
 *
 * @constant {number}
 */
export const VARIANT_ALSO_NEGOTIATES =
    HTTP_STATUS_MAPPINGS.VARIANT_ALSO_NEGOTIATES.code;

/**
 * HTTP status code for "Insufficient Storage" (507).
 *
 * @constant {number}
 */
export const INSUFFICIENT_STORAGE =
    HTTP_STATUS_MAPPINGS.INSUFFICIENT_STORAGE.code;

/**
 * HTTP status code for "Loop Detected" (508).
 *
 * @constant {number}
 */
export const LOOP_DETECTED = HTTP_STATUS_MAPPINGS.LOOP_DETECTED.code;

/**
 * HTTP status code for "Not Extended" (510).
 *
 * @constant {number}
 */
export const NOT_EXTENDED = HTTP_STATUS_MAPPINGS.NOT_EXTENDED.code;

/**
 * HTTP status code for "Network Authentication Required" (511).
 *
 * @constant {number}
 */
export const NETWORK_AUTHENTICATION_REQUIRED =
    HTTP_STATUS_MAPPINGS.NETWORK_AUTHENTICATION_REQUIRED.code;

const EXPORTS = {
    CODES,
    getStatusCode,
    getStatusName,
    getStatusDescription,
    isInformational,
    isSuccess,
    isRedirectional,
    isClientError,
    isServerError,
    getInformationalCodes,
    getSuccessCodes,
    getRedirectionalCodes,
    getClientErrorCodes,
    getServerErrorCodes,
    isValidStatusCode,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    EARLY_HINTS,
    TOO_LONG,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE_INFORMATION,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    ALREADY_REPORTED,
    IM_USED,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    SWITCH_PROXY,
    TEMPORARY_REDIRECT,
    PERMANENT_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_TOO_LONG,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    EXPECTATION_FAILED,
    IM_A_TEAPOT,
    INSUFFICIENT_SPACE_ON_RESOURCE,
    METHOD_FAILURE,
    MISDIRECTED_REQUEST,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    TOO_EARLY,
    UPGRADE_REQUIRED,
    PRECONDITION_REQUIRED,
    TOO_MANY_REQUESTS,
    REQUEST_HEADER_FIELDS_TOO_LARGE,
    UNAVAILABLE_FOR_LEGAL_REASONS,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    VARIANT_ALSO_NEGOTIATES,
    INSUFFICIENT_STORAGE,
    LOOP_DETECTED,
    NOT_EXTENDED,
    NETWORK_AUTHENTICATION_REQUIRED,
};
module.exports = EXPORTS;
