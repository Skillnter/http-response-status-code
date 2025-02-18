/**
 * The HTTP status codes.
 * @enum {number}
 */
export enum CODES {
    /**
     * @constant HTTP_CODE_100
     * @alias Continue
     * @description HTTP status code for "Continue" (100).
     */
    HTTP_CODE_100 = 100,

    /**
     * @constant HTTP_CODE_101
     * @alias Switching Protocols
     * @description HTTP status code for "Switching Protocols" (101).
     */
    HTTP_CODE_101 = 101,

    /**
     * @constant HTTP_CODE_102
     * @alias Processing
     * @description HTTP status code for "Processing" (102).
     */
    HTTP_CODE_102 = 102,

    /**
     * @constant HTTP_CODE_103
     * @alias Early Hints
     * @description HTTP status code for "Early Hints" (103).
     */
    HTTP_CODE_103 = 103,

    /**
     * @constant HTTP_CODE_122
     * @alias Too Long
     * @description HTTP status code for "Too Long" (122).
     */
    HTTP_CODE_122 = 122,

    /**
     * @constant HTTP_CODE_200
     * @alias OK
     * @description HTTP status code for "OK" (200).
     */
    HTTP_CODE_200 = 200,

    /**
     * @constant HTTP_CODE_201
     * @alias Created
     * @description HTTP status code for "Created" (201).
     */
    HTTP_CODE_201 = 201,

    /**
     * @constant HTTP_CODE_202
     * @alias Accepted
     * @description HTTP status code for "Accepted" (202).
     */
    HTTP_CODE_202 = 202,

    /**
     * @constant HTTP_CODE_203
     * @alias Non Authoritative Information
     * @description HTTP status code for "Non Authoritative Information" (203).
     */
    HTTP_CODE_203 = 203,

    /**
     * @constant HTTP_CODE_204
     * @alias No Content
     * @description HTTP status code for "No Content" (204).
     */
    HTTP_CODE_204 = 204,

    /**
     * @constant HTTP_CODE_205
     * @alias Reset Content
     * @description HTTP status code for "Reset Content" (205).
     */
    HTTP_CODE_205 = 205,

    /**
     * @constant HTTP_CODE_206
     * @alias Partial Content
     * @description HTTP status code for "Partial Content" (206).
     */
    HTTP_CODE_206 = 206,

    /**
     * @constant HTTP_CODE_207
     * @alias Multi-Status
     * @description HTTP status code for "Multi-Status" (207).
     */
    HTTP_CODE_207 = 207,

    /**
     * @constant HTTP_CODE_208
     * @alias Already Reported
     * @description HTTP status code for "Already Reported" (208).
     */
    HTTP_CODE_208 = 208,

    /**
     * @constant HTTP_CODE_226
     * @alias IM Used
     * @description HTTP status code for "IM Used" (226).
     */
    HTTP_CODE_226 = 226,

    /**
     * @constant HTTP_CODE_300
     * @alias Multiple Choices
     * @description HTTP status code for "Multiple Choices" (300).
     */
    HTTP_CODE_300 = 300,

    /**
     * @constant HTTP_CODE_301
     * @alias Moved Permanently
     * @description HTTP status code for "Moved Permanently" (301).
     */
    HTTP_CODE_301 = 301,

    /**
     * @constant HTTP_CODE_302
     * @alias Moved Temporarily
     * @description HTTP status code for "Moved Temporarily" (302).
     */
    HTTP_CODE_302 = 302,

    /**
     * @constant HTTP_CODE_303
     * @alias See Other
     * @description HTTP status code for "See Other" (303).
     */
    HTTP_CODE_303 = 303,

    /**
     * @constant HTTP_CODE_304
     * @alias Not Modified
     * @description HTTP status code for "Not Modified" (304).
     */
    HTTP_CODE_304 = 304,

    /**
     * @constant HTTP_CODE_305
     * @alias Use Proxy
     * @description HTTP status code for "Use Proxy" (305).
     */
    HTTP_CODE_305 = 305,

    /**
     * @constant HTTP_CODE_306
     * @alias Switch Proxy
     * @description HTTP status code for "Switch Proxy" (306).
     */
    HTTP_CODE_306 = 306,

    /**
     * @constant HTTP_CODE_307
     * @alias Temporary Redirect
     * @description HTTP status code for "Temporary Redirect" (307).
     */
    HTTP_CODE_307 = 307,

    /**
     * @constant HTTP_CODE_308
     * @alias Permanent Redirect
     * @description HTTP status code for "Permanent Redirect" (308).
     */
    HTTP_CODE_308 = 308,

    /**
     * @constant HTTP_CODE_400
     * @alias Bad Request
     * @description HTTP status code for "Bad Request" (400).
     */
    HTTP_CODE_400 = 400,

    /**
     * @constant HTTP_CODE_401
     * @alias Unauthorized
     * @description HTTP status code for "Unauthorized" (401).
     */
    HTTP_CODE_401 = 401,

    /**
     * @constant HTTP_CODE_402
     * @alias Payment Required
     * @description HTTP status code for "Payment Required" (402).
     */
    HTTP_CODE_402 = 402,

    /**
     * @constant HTTP_CODE_403
     * @alias Forbidden
     * @description HTTP status code for "Forbidden" (403).
     */
    HTTP_CODE_403 = 403,

    /**
     * @constant HTTP_CODE_404
     * @alias Not Found
     * @description HTTP status code for "Not Found" (404).
     */
    HTTP_CODE_404 = 404,

    /**
     * @constant HTTP_CODE_405
     * @alias Method Not Allowed
     * @description HTTP status code for "Method Not Allowed" (405).
     */
    HTTP_CODE_405 = 405,

    /**
     * @constant HTTP_CODE_406
     * @alias Not Acceptable
     * @description HTTP status code for "Not Acceptable" (406).
     */
    HTTP_CODE_406 = 406,

    /**
     * @constant HTTP_CODE_407
     * @alias Proxy Authentication Required
     * @description HTTP status code for "Proxy Authentication Required" (407).
     */
    HTTP_CODE_407 = 407,

    /**
     * @constant HTTP_CODE_408
     * @alias Request Timeout
     * @description HTTP status code for "Request Timeout" (408).
     */
    HTTP_CODE_408 = 408,

    /**
     * @constant HTTP_CODE_409
     * @alias Conflict
     * @description HTTP status code for "Conflict" (409).
     */
    HTTP_CODE_409 = 409,

    /**
     * @constant HTTP_CODE_410
     * @alias Gone
     * @description HTTP status code for "Gone" (410).
     */
    HTTP_CODE_410 = 410,

    /**
     * @constant HTTP_CODE_411
     * @alias Length Required
     * @description HTTP status code for "Length Required" (411).
     */
    HTTP_CODE_411 = 411,

    /**
     * @constant HTTP_CODE_412
     * @alias Precondition Failed
     * @description HTTP status code for "Precondition Failed" (412).
     */
    HTTP_CODE_412 = 412,

    /**
     * @constant HTTP_CODE_413
     * @alias Request Entity Too Large
     * @description HTTP status code for "Request Entity Too Large" (413).
     */
    HTTP_CODE_413 = 413,

    /**
     * @constant HTTP_CODE_414
     * @alias Request-URI Too Long
     * @description HTTP status code for "Request-URI Too Long" (414).
     */
    HTTP_CODE_414 = 414,

    /**
     * @constant HTTP_CODE_415
     * @alias Unsupported Media Type
     * @description HTTP status code for "Unsupported Media Type" (415).
     */
    HTTP_CODE_415 = 415,

    /**
     * @constant HTTP_CODE_416
     * @alias Requested Range Not Satisfiable
     * @description HTTP status code for "Requested Range Not Satisfiable" (416).
     */
    HTTP_CODE_416 = 416,

    /**
     * @constant HTTP_CODE_417
     * @alias Expectation Failed
     * @description HTTP status code for "Expectation Failed" (417).
     */
    HTTP_CODE_417 = 417,

    /**
     * @constant HTTP_CODE_418
     * @alias I'm a Teapot
     * @description HTTP status code for "I'm a Teapot" (418).
     */
    HTTP_CODE_418 = 418,

    /**
     * @constant HTTP_CODE_419
     * @alias Insufficient Space on Resource
     * @description HTTP status code for "Insufficient Space on Resource" (419).
     */
    HTTP_CODE_419 = 419,

    /**
     * @constant HTTP_CODE_420
     * @alias Method Failure
     * @description HTTP status code for "Method Failure" (420).
     */
    HTTP_CODE_420 = 420,

    /**
     * @constant HTTP_CODE_421
     * @alias Misdirected Request
     * @description HTTP status code for "Misdirected Request" (421).
     */
    HTTP_CODE_421 = 421,

    /**
     * @constant HTTP_CODE_422
     * @alias Unprocessable Entity
     * @description HTTP status code for "Unprocessable Entity" (422).
     */
    HTTP_CODE_422 = 422,

    /**
     * @constant HTTP_CODE_423
     * @alias Locked
     * @description HTTP status code for "Locked" (423).
     */
    HTTP_CODE_423 = 423,

    /**
     * @constant HTTP_CODE_424
     * @alias Failed Dependency
     * @description HTTP status code for "Failed Dependency" (424).
     */
    HTTP_CODE_424 = 424,

    /**
     * @constant HTTP_CODE_425
     * @alias Too Early
     * @description HTTP status code for "Too Early" (425).
     */
    HTTP_CODE_425 = 425,

    /**
     * @constant HTTP_CODE_426
     * @alias Upgrade Required
     * @description HTTP status code for "Upgrade Required" (426).
     */
    HTTP_CODE_426 = 426,

    /**
     * @constant HTTP_CODE_428
     * @alias Precondition Required
     * @description HTTP status code for "Precondition Required" (428).
     */
    HTTP_CODE_428 = 428,

    /**
     * @constant HTTP_CODE_429
     * @alias Too Many Requests
     * @description HTTP status code for "Too Many Requests" (429).
     */
    HTTP_CODE_429 = 429,

    /**
     * @constant HTTP_CODE_431
     * @alias Request Header Fields Too Large
     * @description HTTP status code for "Request Header Fields Too Large" (431).
     */
    HTTP_CODE_431 = 431,

    /**
     * @constant HTTP_CODE_451
     * @alias Unavailable For Legal Reasons
     * @description HTTP status code for "Unavailable For Legal Reasons" (451).
     */
    HTTP_CODE_451 = 451,

    /**
     * @constant HTTP_CODE_500
     * @alias Internal Server Error
     * @description HTTP status code for "Internal Server Error" (500).
     */
    HTTP_CODE_500 = 500,

    /**
     * @constant HTTP_CODE_501
     * @alias Not Implemented
     * @description HTTP status code for "Not Implemented" (501).
     */
    HTTP_CODE_501 = 501,

    /**
     * @constant HTTP_CODE_502
     * @alias Bad Gateway
     * @description HTTP status code for "Bad Gateway" (502).
     */
    HTTP_CODE_502 = 502,

    /**
     * @constant HTTP_CODE_503
     * @alias Service Unavailable
     * @description HTTP status code for "Service Unavailable" (503).
     */
    HTTP_CODE_503 = 503,

    /**
     * @constant HTTP_CODE_504
     * @alias Gateway Timeout
     * @description HTTP status code for "Gateway Timeout" (504).
     */
    HTTP_CODE_504 = 504,

    /**
     * @constant HTTP_CODE_505
     * @alias HTTP Version Not Supported
     * @description HTTP status code for "HTTP Version Not Supported" (505).
     */
    HTTP_CODE_505 = 505,

    /**
     * @constant HTTP_CODE_506
     * @alias Variant Also Negotiates
     * @description HTTP status code for "Variant Also Negotiates" (506).
     */
    HTTP_CODE_506 = 506,

    /**
     * @constant HTTP_CODE_507
     * @alias Insufficient Storage
     * @description HTTP status code for "Insufficient Storage" (507).
     */
    HTTP_CODE_507 = 507,

    /**
     * @constant HTTP_CODE_508
     * @alias Loop Detected
     * @description HTTP status code for "Loop Detected" (508).
     */
    HTTP_CODE_508 = 508,

    /**
     * @constant HTTP_CODE_510
     * @alias Not Extended
     * @description HTTP status code for "Not Extended" (510).
     */
    HTTP_CODE_510 = 510,

    /**
     * @constant HTTP_CODE_511
     * @alias Network Authentication Required
     * @description HTTP status code for "Network Authentication Required" (511).
     */
    HTTP_CODE_511 = 511,
}
