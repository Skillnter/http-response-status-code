# http-response-status-code

All HTTP Status Codes from [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/skillnter/http-response-status-code/main.yml) [![npm version](https://img.shields.io/npm/v/http-response-status-code?color=brightgreen)](https://www.npmjs.com/package/http-response-status-code) [![GitHub license](https://img.shields.io/github/license/skillnter/http-response-status-code?color=brightgreen)](LICENSE) [![GitHub Issues](https://img.shields.io/github/issues/Skillnter/http-response-status-code)](https://github.com/Skillnter/http-response-status-code/issues) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/7d55170d359c475e9e586fd00e00841e)](https://www.codacy.com/gh/Skillnter/http-response-status-code/dashboard?utm_source=github.com&utm_medium=referral&utm_content=Skillnter/http-response-status-code&utm_campaign=Badge_Coverage) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/http-response-status-code) ![npms.io (final)](https://img.shields.io/npms-io/maintenance-score/http-response-status-code?color=brightgreen) ![npm](https://img.shields.io/npm/dy/http-response-status-code) [![PayPal Donate](https://img.shields.io/badge/Donate-PayPal-ff4081.svg)](https://www.paypal.me/skillnte)

## Installation

```console
npm install http-response-status-code
```

## Usage ([Example][runkit])

```javascript
var STATUS_CODES = require('http-response-status-code');
// OR
import * as STATUS_CODES from 'http-response-status-code';

console.log(STATUS_CODES.getStatusName(STATUS_CODES.OK));
// OK

console.log(STATUS_CODES.getStatusDescription(STATUS_CODES.INTERNAL_SERVER_ERROR));
// Internal Server Error

console.log(STATUS_CODES.getStatusCode("IM_A_TEAPOT"));
// 418

console.log(STATUS_CODES.CODES.HTTP_CODE_200);
// 200

res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).end()
// OR
res.status(STATUS_CODES.CODES.HTTP_CODE_500).end()


res.status(STATUS_CODES.BAD_REQUEST).send(STATUS_CODES.getStatusDescription(STATUS_CODES.BAD_REQUEST));
// OR
res.status(STATUS_CODES.CODES.HTTP_CODE_400).send(STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_400));

res.status(STATUS_CODES.getStatusCode("NOT_FOUND")).sendFile('/absolute/path/to/404.png');
// OR
res.status(STATUS_CODES.CODES.HTTP_CODE_404).sendFile('/absolute/path/to/404.png');
```

## Status Codes

|  Code  |     Enum      | Name                            | Description
| ------ | ------------- | ------------------------------- | -------------------------------
|  100   | HTTP_CODE_100 | CONTINUE                        | Continue
|  101   | HTTP_CODE_101 | SWITCHING_PROTOCOLS             | Switching Protocols
|  102   | HTTP_CODE_102 | PROCESSING                      | Processing
|  103   | HTTP_CODE_103 | EARLY_HINTS                     | Early Hints
|  122   | HTTP_CODE_122 | TOO_LONG                        | Too Long
|  200   | HTTP_CODE_200 | OK                              | OK
|  201   | HTTP_CODE_201 | CREATED                         | Created
|  202   | HTTP_CODE_202 | ACCEPTED                        | Accepted
|  203   | HTTP_CODE_203 | NON_AUTHORITATIVE_INFORMATION   | Non Authoritative Information
|  204   | HTTP_CODE_204 | NO_CONTENT                      | No Content
|  205   | HTTP_CODE_205 | RESET_CONTENT                   | Reset Content
|  206   | HTTP_CODE_206 | PARTIAL_CONTENT                 | Partial Content
|  207   | HTTP_CODE_207 | MULTI_STATUS                    | Multi-Status
|  208   | HTTP_CODE_208 | ALREADY_REPORTED                | Already Reported
|  226   | HTTP_CODE_226 | IM_USED                         | IM Used
|  300   | HTTP_CODE_300 | MULTIPLE_CHOICES                | Multiple Choices
|  301   | HTTP_CODE_301 | MOVED_PERMANENTLY               | Moved Permanently
|  302   | HTTP_CODE_302 | MOVED_TEMPORARILY               | Moved Temporarily
|  303   | HTTP_CODE_303 | SEE_OTHER                       | See Other
|  304   | HTTP_CODE_304 | NOT_MODIFIED                    | Not Modified
|  305   | HTTP_CODE_305 | USE_PROXY                       | Use Proxy
|  307   | HTTP_CODE_307 | TEMPORARY_REDIRECT              | Temporary Redirect
|  308   | HTTP_CODE_308 | PERMANENT_REDIRECT              | Permanent Redirect
|  400   | HTTP_CODE_400 | BAD_REQUEST                     | Bad Request
|  401   | HTTP_CODE_401 | UNAUTHORIZED                    | Unauthorized
|  402   | HTTP_CODE_402 | PAYMENT_REQUIRED                | Payment Required
|  403   | HTTP_CODE_403 | FORBIDDEN                       | Forbidden
|  404   | HTTP_CODE_404 | NOT_FOUND                       | Not Found
|  405   | HTTP_CODE_405 | METHOD_NOT_ALLOWED              | Method Not Allowed
|  406   | HTTP_CODE_406 | NOT_ACCEPTABLE                  | Not Acceptable
|  407   | HTTP_CODE_407 | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required
|  408   | HTTP_CODE_408 | REQUEST_TIMEOUT                 | Request Timeout
|  409   | HTTP_CODE_409 | CONFLICT                        | Conflict
|  410   | HTTP_CODE_410 | GONE                            | Gone
|  411   | HTTP_CODE_411 | LENGTH_REQUIRED                 | Length Required
|  412   | HTTP_CODE_412 | PRECONDITION_FAILED             | Precondition Failed
|  413   | HTTP_CODE_413 | REQUEST_TOO_LONG                | Request Entity Too Large
|  414   | HTTP_CODE_414 | REQUEST_URI_TOO_LONG            | Request-URI Too Long
|  415   | HTTP_CODE_415 | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type
|  416   | HTTP_CODE_416 | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable
|  417   | HTTP_CODE_417 | EXPECTATION_FAILED              | Expectation Failed
|  418   | HTTP_CODE_418 | IM_A_TEAPOT                     | I'm a teapot
|  419   | HTTP_CODE_419 | INSUFFICIENT_SPACE_ON_RESOURCE  | Insufficient Space on Resource
|  420   | HTTP_CODE_420 | METHOD_FAILURE                  | Method Failure
|  421   | HTTP_CODE_421 | MISDIRECTED_REQUEST             | Misdirected Request
|  422   | HTTP_CODE_422 | UNPROCESSABLE_ENTITY            | Unprocessable Entity
|  423   | HTTP_CODE_423 | LOCKED                          | Locked
|  424   | HTTP_CODE_424 | FAILED_DEPENDENCY               | Failed Dependency
|  425   | HTTP_CODE_425 | TOO_EARLY                       | Too Early
|  426   | HTTP_CODE_426 | UPGRADE_REQUIRED                | Upgrade Required
|  428   | HTTP_CODE_428 | PRECONDITION_REQUIRED           | Precondition Required
|  429   | HTTP_CODE_429 | TOO_MANY_REQUESTS               | Too Many Requests
|  431   | HTTP_CODE_431 | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large
|  451   | HTTP_CODE_451 | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons
|  500   | HTTP_CODE_500 | INTERNAL_SERVER_ERROR           | Internal Server Error
|  501   | HTTP_CODE_501 | NOT_IMPLEMENTED                 | Not Implemented
|  502   | HTTP_CODE_502 | BAD_GATEWAY                     | Bad Gateway
|  503   | HTTP_CODE_503 | SERVICE_UNAVAILABLE             | Service Unavailable
|  504   | HTTP_CODE_504 | GATEWAY_TIMEOUT                 | Gateway Timeout
|  505   | HTTP_CODE_505 | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported
|  506   | HTTP_CODE_506 | VARIANT_ALSO_NEGOTIATES         | Variant Also Negotiates
|  507   | HTTP_CODE_507 | INSUFFICIENT_STORAGE            | Insufficient Storage
|  508   | HTTP_CODE_508 | LOOP_DETECTED                   | Loop Detected
|  510   | HTTP_CODE_510 | NOT_EXTENDED                    | Not Extended
|  511   | HTTP_CODE_511 | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required

## People

The original author of the project is [Himanshu Bansal][skillnter]

## License

`http-response-status-code` project is open-sourced software licensed under the [MIT license](LICENSE) by [Himanshu Bansal][skillnter].

[skillnter]: https://github.com/Skillnter/
[runkit]: https://runkit.com/skillnter/http-response-status-code/