# http-response-status-codes 

All HTTP Status Codes from [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

[![Build Status](https://travis-ci.org/Skillnter/http-response-status-code.svg?branch=master)](https://travis-ci.org/Skillnter/http-response-status-code) [![npm version](https://badge.fury.io/js/http-response-status-code.svg)](https://badge.fury.io/js/http-response-status-code) [![GitHub license](https://img.shields.io/github/license/Skillnter/http-response-status-code)]()   [![GitHub Issues](https://img.shields.io/github/issues/Skillnter/http-response-status-code)]()
[![PayPal Donate](https://img.shields.io/badge/Donate-PayPal-ff4081.svg)](https://www.paypal.me/skillnte)


## Installation

```console
npm install http-response-status-code
```

## Usage 

```javascript
var STATUS_CODES = require('http-response-status-code');

console.log(STATUS_CODES.getStatusName(STATUS_CODES.OK));
// OK

console.log(STATUS_CODES.getStatusDescription(STATUS_CODES.INTERNAL_SERVER_ERROR));
// Internal Server Error

console.log(STATUS_CODES.getStatusCode("IM_A_TEAPOT"));
// 418


res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).end()
res.status(STATUS_CODES.BAD_REQUEST).send(STATUS_CODES.getStatusDescription(STATUS_CODES.BAD_REQUEST));
res.status(STATUS_CODES.getStatusCode("NOT_FOUND")).sendFile('/absolute/path/to/404.png');
```

## Status Codes

|  Code  | Name                            | Description
| ------ | ------------------------------- | -------------------------------
|  100   | CONTINUE                        | Continue
|  101   | SWITCHING_PROTOCOLS             | Switching Protocols
|  102   | PROCESSING                      | Processing
|  103   | EARLY_HINTS                     | Early Hints
|  200   | OK                              | OK
|  201   | CREATED                         | Created
|  202   | ACCEPTED                        | Accepted
|  203   | NON_AUTHORITATIVE_INFORMATION   | Non Authoritative Information
|  204   | NO_CONTENT                      | No Content
|  205   | RESET_CONTENT                   | Reset Content
|  206   | PARTIAL_CONTENT                 | Partial Content
|  207   | MULTI_STATUS                    | Multi-Status
|  208   | ALREADY_REPORTED                | Already Reported
|  226   | IM_USED                         | IM Used
|  300   | MULTIPLE_CHOICES                | Multiple Choices
|  301   | MOVED_PERMANENTLY               | Moved Permanently
|  302   | MOVED_TEMPORARILY               | Moved Temporarily
|  303   | SEE_OTHER                       | See Other
|  304   | NOT_MODIFIED                    | Not Modified
|  305   | USE_PROXY                       | Use Proxy
|  307   | TEMPORARY_REDIRECT              | Temporary Redirect
|  308   | PERMANENT_REDIRECT              | Permanent Redirect
|  400   | BAD_REQUEST                     | Bad Request
|  401   | UNAUTHORIZED                    | Unauthorized
|  402   | PAYMENT_REQUIRED                | Payment Required
|  403   | FORBIDDEN                       | Forbidden
|  404   | NOT_FOUND                       | Not Found
|  405   | METHOD_NOT_ALLOWED              | Method Not Allowed
|  406   | NOT_ACCEPTABLE                  | Not Acceptable
|  407   | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required
|  408   | REQUEST_TIMEOUT                 | Request Timeout
|  410   | GONE                            | Gone
|  409   | CONFLICT                        | Conflict
|  411   | LENGTH_REQUIRED                 | Length Required
|  412   | PRECONDITION_FAILED             | Precondition Failed
|  413   | REQUEST_TOO_LONG                | Request Entity Too Large
|  414   | REQUEST_URI_TOO_LONG            | Request-URI Too Long
|  416   | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable
|  415   | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type
|  417   | EXPECTATION_FAILED              | Expectation Failed
|  418   | IM_A_TEAPOT                     | I'm a teapot
|  419   | INSUFFICIENT_SPACE_ON_RESOURCE  | Insufficient Space on Resource
|  420   | METHOD_FAILURE                  | Method Failure
|  422   | UNPROCESSABLE_ENTITY            | Unprocessable Entity
|  423   | LOCKED                          | Locked
|  424   | FAILED_DEPENDENCY               | Failed Dependency
|  428   | PRECONDITION_REQUIRED           | Precondition Required
|  429   | TOO_MANY_REQUESTS               | Too Many Requests
|  431   | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large
|  451   | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons
|  500   | INTERNAL_SERVER_ERROR           | Server Error
|  501   | NOT_IMPLEMENTED                 | Not Implemented
|  502   | BAD_GATEWAY                     | Bad Gateway
|  503   | SERVICE_UNAVAILABLE             | Service Unavailable
|  504   | GATEWAY_TIMEOUT                 | Gateway Timeout
|  505   | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported
|  507   | INSUFFICIENT_STORAGE            | Insufficient Storage
|  511   | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required

## People

The original author of the project is [Himanshu Bansal](https://github.com/Skillnter)

## License

  [MIT](LICENSE)

