# http-response-status-code

All HTTP Status Codes from [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/skillnter/http-response-status-code/Test%20Pull%20Requests) [![npm version](https://badge.fury.io/js/http-response-status-code.svg)](https://badge.fury.io/js/http-response-status-code) [![GitHub license](https://img.shields.io/github/license/Skillnter/http-response-status-code)]()   [![GitHub Issues](https://img.shields.io/github/issues/Skillnter/http-response-status-code)]() [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/7d55170d359c475e9e586fd00e00841e)](https://www.codacy.com/gh/Skillnter/http-response-status-code/dashboard?utm_source=github.com&utm_medium=referral&utm_content=Skillnter/http-response-status-code&utm_campaign=Badge_Coverage) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/http-response-status-code) ![npms.io (final)](https://img.shields.io/npms-io/maintenance-score/http-response-status-code)
[![PayPal Donate](https://img.shields.io/badge/Donate-PayPal-ff4081.svg)](https://www.paypal.me/skillnte)

## Installation

```console
npm install http-response-status-code
```

## Usage ([Example][runkit])

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
|  122   | TOO_LONG                        | Too Long
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
|  409   | CONFLICT                        | Conflict
|  410   | GONE                            | Gone
|  411   | LENGTH_REQUIRED                 | Length Required
|  412   | PRECONDITION_FAILED             | Precondition Failed
|  413   | REQUEST_TOO_LONG                | Request Entity Too Large
|  414   | REQUEST_URI_TOO_LONG            | Request-URI Too Long
|  415   | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type
|  416   | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable
|  417   | EXPECTATION_FAILED              | Expectation Failed
|  418   | IM_A_TEAPOT                     | I'm a teapot
|  419   | INSUFFICIENT_SPACE_ON_RESOURCE  | Insufficient Space on Resource
|  420   | METHOD_FAILURE                  | Method Failure
|  421   | MISDIRECTED_REQUEST             | Misdirected Request
|  422   | UNPROCESSABLE_ENTITY            | Unprocessable Entity
|  423   | LOCKED                          | Locked
|  424   | FAILED_DEPENDENCY               | Failed Dependency
|  425   | TOO_EARLY                       | Too Early
|  426   | UPGRADE_REQUIRED                | Upgrade Required
|  428   | PRECONDITION_REQUIRED           | Precondition Required
|  429   | TOO_MANY_REQUESTS               | Too Many Requests
|  431   | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large
|  451   | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons
|  500   | INTERNAL_SERVER_ERROR           | Internal Server Error
|  501   | NOT_IMPLEMENTED                 | Not Implemented
|  502   | BAD_GATEWAY                     | Bad Gateway
|  503   | SERVICE_UNAVAILABLE             | Service Unavailable
|  504   | GATEWAY_TIMEOUT                 | Gateway Timeout
|  505   | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported
|  506   | VARIANT_ALSO_NEGOTIATES         | Variant Also Negotiates
|  507   | INSUFFICIENT_STORAGE            | Insufficient Storage
|  508   | LOOP_DETECTED                   | Loop Detected
|  510   | NOT_EXTENDED                    | Not Extended
|  511   | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required

## People

The original author of the project is [Himanshu Bansal][skillnter]

## License

`http-response-status-code` project is open-sourced software licensed under the [MIT license](LICENSE) by [Himanshu Bansal][skillnter].

[skillnter]: https://github.com/Skillnter/
[runkit]: https://runkit.com/skillnter/http-response-status-code/