/**
 * Represents a module.
 * @module STATUS_CODES
 */
/** ----- STATUS CODE MODULE | START ----- **/
    (function(){
        /* ----- INITIALIZING VARIABLE CONSTRUCTOR | START ------ */
            var MODULE = {};
            var STATUS_CODES = {};
        /* ----- INITIALIZING VARIABLE CONSTRUCTOR | STOP ------ */

        /* ----- VARIABLE VALUES | START ------ */
            STATUS_CODES[MODULE.CONTINUE = 100] = "Continue";
            STATUS_CODES[MODULE.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
            STATUS_CODES[MODULE.PROCESSING = 102] = "Processing";

            STATUS_CODES[MODULE.OK = 200] = "OK";
            STATUS_CODES[MODULE.CREATED = 201] = "Created";
            STATUS_CODES[MODULE.ACCEPTED = 202] = "Accepted";
            STATUS_CODES[MODULE.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
            STATUS_CODES[MODULE.NO_CONTENT = 204] = "No Content";
            STATUS_CODES[MODULE.RESET_CONTENT = 205] = "Reset Content";
            STATUS_CODES[MODULE.PARTIAL_CONTENT = 206] = "Partial Content";
            STATUS_CODES[MODULE.MULTI_STATUS = 207] = "Multi-Status";

            STATUS_CODES[MODULE.MULTIPLE_CHOICES = 300] = "Multiple Choices";
            STATUS_CODES[MODULE.MOVED_PERMANENTLY = 301] = "Moved Permanently";
            STATUS_CODES[MODULE.MOVED_TEMPORARILY = 302] = "Moved Temporarily";
            STATUS_CODES[MODULE.SEE_OTHER = 303] = "See Other";
            STATUS_CODES[MODULE.NOT_MODIFIED = 304] = "Not Modified";
            STATUS_CODES[MODULE.USE_PROXY = 305] = "Use Proxy";
            STATUS_CODES[MODULE.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
            STATUS_CODES[MODULE.PERMANENT_REDIRECT = 308] = "Permanent Redirect";

            STATUS_CODES[MODULE.BAD_REQUEST = 400] = "Bad Request";
            STATUS_CODES[MODULE.UNAUTHORIZED = 401] = "Unauthorized";
            STATUS_CODES[MODULE.PAYMENT_REQUIRED = 402] = "Payment Required";
            STATUS_CODES[MODULE.FORBIDDEN = 403] = "Forbidden";
            STATUS_CODES[MODULE.NOT_FOUND = 404] = "Not Found";
            STATUS_CODES[MODULE.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
            STATUS_CODES[MODULE.NOT_ACCEPTABLE = 406] = "Not Acceptable";
            STATUS_CODES[MODULE.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
            STATUS_CODES[MODULE.REQUEST_TIMEOUT = 408] = "Request Timeout";
            STATUS_CODES[MODULE.GONE = 410] = "Gone";
            STATUS_CODES[MODULE.CONFLICT = 409] = "Conflict";
            STATUS_CODES[MODULE.LENGTH_REQUIRED = 411] = "Length Required";
            STATUS_CODES[MODULE.PRECONDITION_FAILED = 412] = "Precondition Failed";
            STATUS_CODES[MODULE.REQUEST_TOO_LONG = 413] = "Request Entity Too Large";
            STATUS_CODES[MODULE.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
            STATUS_CODES[MODULE.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
            STATUS_CODES[MODULE.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
            STATUS_CODES[MODULE.EXPECTATION_FAILED = 417] = "Expectation Failed";
            STATUS_CODES[MODULE.IM_A_TEAPOT = 418] = "I'm a teapot";
            STATUS_CODES[MODULE.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
            STATUS_CODES[MODULE.METHOD_FAILURE = 420] = "Method Failure";
            STATUS_CODES[MODULE.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
            STATUS_CODES[MODULE.LOCKED = 423] = "Locked";
            STATUS_CODES[MODULE.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
            STATUS_CODES[MODULE.PRECONDITION_REQUIRED = 428] = "Precondition Required";
            STATUS_CODES[MODULE.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
            STATUS_CODES[MODULE.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";

            STATUS_CODES[MODULE.INTERNAL_SERVER_ERROR = 500] = "Server Error";
            STATUS_CODES[MODULE.NOT_IMPLEMENTED = 501] = "Not Implemented";
            STATUS_CODES[MODULE.BAD_GATEWAY = 502] = "Bad Gateway";
            STATUS_CODES[MODULE.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
            STATUS_CODES[MODULE.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
            STATUS_CODES[MODULE.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
            STATUS_CODES[MODULE.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
            STATUS_CODES[MODULE.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
        /* ----- VARIABLE VALUES | STOP ------ */


        /* ------ GET STATUS CODE | FROM NAME | START ------ */
            /**
             * Represents a function.
             * @function getStatusCode
             * @param {string} name - The name of the Status code.
             * @returns {number}
             */
            MODULE.getStatusCode = function(name){
                if(MODULE.hasOwnProperty(name)){
                    return MODULE[name];
                }else{
                    throw new Error("Status code does not exist: "+ name);
                }
            };
        /* ------ GET STATUS CODE | FROM NAME | STOP ------ */

        /* ------ GET NAME | FROM STATUS CODE | START ------ */
            /**
             * Represents a function.
             * @function getStatusName
             * @param {string} code - The Status Code Number.
             * @returns {string}
             */
            MODULE.getStatusName = function(code){
                if(STATUS_CODES.hasOwnProperty(code)){
                    let keys = Object.keys(MODULE);
                    for(let i = 0; i < keys.length; i++){
                        if(MODULE[keys[i]] == code){
                            return keys[i];
                        }
                    }
                }else{
                    throw new Error("Status code does not exist: "+ name);
                }
            };
        /* ------ GET NAME | FROM STATUS CODE | STOP ------ */

        /* ------ GET DESCRIPTION | FROM CODE | START ------ */
            /**
             * Represents a function.
             * @function getStatusDescription
             * @param {string} code - The Status Code Number.
             * @returns {string}
             */
            MODULE.getStatusDescription = function(code){
                if(STATUS_CODES.hasOwnProperty(code)){
                    return STATUS_CODES[code];
                }else{
                    throw new Error("Status code does not exist: "+ code);
                }
            };
        /* ------ GET DESCRIPTION | FROM CODE | STOP ------ */

        /* ----- EXPORT ----- */
            Object.freeze(MODULE);
            module.exports = MODULE;
    })();
/** ----- STATUS CODE MODULE | FINISH ----- **/