# HTTP Response Status Code

All HTTP Status Codes from [Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/skillnter/http-response-status-code/main.yml)
[![npm version](https://img.shields.io/npm/v/http-response-status-code?color=brightgreen)](https://www.npmjs.com/package/http-response-status-code)
[![GitHub license](https://img.shields.io/github/license/skillnter/http-response-status-code?color=brightgreen)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Skillnter/http-response-status-code)](https://github.com/Skillnter/http-response-status-code/issues)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/7d55170d359c475e9e586fd00e00841e)](https://www.codacy.com/gh/Skillnter/http-response-status-code/dashboard?utm_source=github.com&utm_medium=referral&utm_content=Skillnter/http-response-status-code&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7d55170d359c475e9e586fd00e00841e)](https://app.codacy.com/gh/Skillnter/http-response-status-code/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![npms.io (final)](https://img.shields.io/npms-io/maintenance-score/http-response-status-code?color=brightgreen)
![npm](https://img.shields.io/npm/dy/http-response-status-code)
[![Socket Badge](https://socket.dev/api/badge/npm/package/http-response-status-code/1.7.3)](https://socket.dev/npm/package/http-response-status-code/overview/1.7.3)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)](https://skillnter.github.io/http-response-status-code/)
[![Github Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-30363D?&logo=GitHub-Sponsors&logoColor=EA4AAA)](https://github.com/sponsors/Skillnter)
[![Open Collective](https://img.shields.io/badge/Open%20Collective-3385FF?logo=open-collective&logoColor=white)](https://opencollective.com/http-response-status-code)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/skillnter)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?logo=patreon&logoColor=white)](https://www.patreon.com/skillnter)
[![PayPal](https://img.shields.io/badge/PayPal-003087?logo=paypal&logoColor=fff)](https://www.paypal.me/skillnte)

## Table of Content

- [Installation](#installation)
- [Usage](#usage-example)
- [Toolset Overview](#toolset-overview)
  - [1. Get Status Code](#1-get-status-code)
  - [2. Get Status Name](#2-get-status-name)
  - [3. Get Status Description](#3-get-status-description)
  - [4. Informational Code Check](#4-informational-code-check)
  - [5. List Informational Codes](#5-list-informational-codes)
  - [6. Success Code Check](#6-success-code-check)
  - [7. List Success Codes](#7-list-success-codes)
  - [8. Redirectional Code Check](#8-redirectional-code-check)
  - [9. List Redirectional Codes](#9-list-redirectional-codes)
  - [10. Client Error Code Check](#10-client-error-code-check)
  - [11. List Client Side Error Codes](#11-list-client-side-error-codes)
  - [12. Server Error Code Check](#12-server-error-code-check)
  - [13. List Server Side Error Codes](#13-list-server-side-error-codes)
  - [14. Valid Code Check](#14-valid-code-check)
- [Status Codes](#status-codes)
- [People](#people)
- [Donations](#donations)
- [License](#license)

## Installation

```console
npm install http-response-status-code
```

## Usage ([Example][runkit])

```javascript
var STATUS_CODES = require('http-response-status-code');
// OR
import * as STATUS_CODES from 'http-response-status-code';
// OR
import { OK, getStatusName, CODES } from 'http-response-status-code';

console.log(STATUS_CODES.getStatusName(STATUS_CODES.OK));
// OK

console.log(getStatusName(OK));
// OK

console.log(OK);
// 200

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

## Toolset Overview

### 1. Get Status Code

Returns the HTTP status code from status code name.

#### Parameters

- `name` (`String`): The name of the status code (e.g., `"IM_A_TEAPOT"`).

#### Returns

- `code` (`number`): The code number of the status if code exists.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][getStatusCode])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getStatusCode("IM_A_TEAPOT")); // 418
```

### 2. Get Status Name

Returns the HTTP status code name from status code (e.g., `418`).

#### Parameters

- `code` (`number`): The code number of the status (e.g., `418`).

#### Returns

- `name` (`String`): The name of the status code if name exists.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][getStatusName])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getStatusName(418)); // "IM_A_TEAPOT"
```

### 3. Get Status Description

Returns the status description from HTTP status code (e.g., `418`).

#### Parameters

- `code` (`number`): The code number of the status (e.g., `418`).

#### Returns

- `name` (`String`): The description of the status code if code exists.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][getStatusDescription])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getStatusDescription(500)); // "Internal Server Error"
```

### 4. Informational Code Check

Determines whether the specified status code represents an informational status.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `100`).

#### Returns

- `isInformational` (`boolean`): Returns `true` if the status code represents a informational status code (1xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isInformational])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isInformational(100)); // True
console.log(STATUS_CODES.isInformational(200)); // False
```

### 5. List Informational Codes

Provides a list of all the informational HTTP status codes.

#### Returns

- `result` (`number[]`): An array of all the informational HTTP status codes.

### Example ([Stackblitz][getInformationalCodes])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getInformationalCodes()); // [100, 101, ...]
```

### 6. Success Code Check

Determines whether the specified status code represents a success status.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `200`).

#### Returns

- `isSuccess` (`boolean`): Returns `true` if the status code represents a success status code (2xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isSuccess])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isSuccess(200)); // True
console.log(STATUS_CODES.isSuccess(100)); // False
```

### 7. List Success Codes

Provides a list of all the success HTTP status codes.

#### Returns

- `result` (`number[]`): An array of all the success HTTP status codes.

### Example ([Stackblitz][getSuccessCodes])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getSuccessCodes()); // [200, 201, ...]
```

### 8. Redirection Code Check

Determines whether the specified status code represents a redirection status.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `300`).

#### Returns

- `isRedirectional` (`boolean`): Returns `true` if the status code represents a redirection status code (3xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isRedirectional])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isRedirectional(300)); // True
console.log(STATUS_CODES.isRedirectional(100)); // False
```

### 9. List Redirection Codes

Provides a list of all the redirection HTTP status codes.

#### Returns

- `result` (`number[]`): An array of all the redirection HTTP status codes.

### Example ([Stackblitz][getRedirectionalCodes])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getRedirectionalCodes()); // [300, 301, ...]
```

### 10. Client Error Code Check

Determines whether the specified status code represents a client side error status.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `400`).

#### Returns

- `isClientError` (`boolean`): Returns `true` if the status code represents a client side error code (4xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isClientError])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isClientError(400)); // True
console.log(STATUS_CODES.isClientError(100)); // False
```

### 11. List Client Side Error Codes

Provides a list of all the client side error HTTP status codes.

#### Returns

- `result` (`number[]`): An array of all the client side error HTTP status codes.

### Example ([Stackblitz][getClientErrorCodes])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getClientErrorCodes()); // [400, 401, ...]
```

### 12. Server Error Code Check

Determines whether the specified status code represents a server side error status.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `500`).

#### Returns

- `isServerError` (`boolean`): Returns `true` if the status code represents a server side error code (5xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isServerError])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isServerError(500)); // True
console.log(STATUS_CODES.isServerError(100)); // False
```

### 13. List Server Side Error Codes

Provides a list of all the server side error HTTP status codes.

#### Returns

- `result` (`number[]`): An array of all the server side error HTTP status codes.

### Example ([Stackblitz][getServerErrorCodes])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.getServerErrorCodes()); // [500, 501, ...]
```

### 14. Valid Code Check

Validates whether the provided status code is recognized as valid.

#### Parameters

- `code` (`number`): The code number of the status (e.g., `500`).

#### Returns

- `isValidStatusCode` (`boolean`): Returns `true` if the status code represents a valid status code (1xx, 2xx, ..., 5xx), otherwise returns `false`.
- `Error`: An error object if something goes wrong, containing details about the issue.

### Example ([Stackblitz][isValidStatusCode])

```javascript
var STATUS_CODES = require('http-response-status-code');
console.log(STATUS_CODES.isValidStatusCode(500)); // True
console.log(STATUS_CODES.isValidStatusCode(999)); // False
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
|  306   | HTTP_CODE_306 | SWITCH_PROXY                    | Switch Proxy
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

## Donations

**This is all voluntary work**, so if you want to support my efforts you can 

- [Buy Me A Coffee](https://www.buymeacoffee.com/skillnter)
- [Paypal](https://www.paypal.me/skillnte)
- [GitHub Sponsor](https://github.com/sponsors/Skillnter)
- [Patreon](https://www.patreon.com/skillnter)
- [Open Collective](https://opencollective.com/http-response-status-code)

You can also use the following:

![BTC: qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj](https://img.shields.io/badge/BTC-qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj-brightgreen)

![ETH: 0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889](https://img.shields.io/badge/ETH-0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889-brightgreen)

## License

`http-response-status-code` project is open-sourced software licensed under the [MIT license](LICENSE) by [Himanshu Bansal][skillnter].

[skillnter]: https://github.com/Skillnter/
[runkit]: https://runkit.com/skillnter/http-response-status-code/
[getStatusCode]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL5
[getStatusName]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL11
[getStatusDescription]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL17
[isInformational]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL22
[getInformationalCodes]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL33
[isSuccess]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL36
[getSuccessCodes]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL43
[isRedirectional]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL48
[getRedirectionalCodes]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL59
[isClientError]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL65
[getClientErrorCodes]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL76
[isServerError]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL82
[getServerErrorCodes]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL93
[isValidStatusCode]: https://stackblitz.com/edit/http-response-status-code?file=index.js%3AL98
