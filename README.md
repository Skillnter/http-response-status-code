# http-status-codes [![Build Status](https://travis-ci.org/Skillnter/http-response-status-code.svg?branch=master)](https://travis-ci.org/Skillnter/http-response-status-code)

All HTTP Status Codes.

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
// Server Error

console.log(STATUS_CODES.getStatusCode("IM_A_TEAPOT"));
// 418


res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).end()
res.status(STATUS_CODES.BAD_REQUEST).send(STATUS_CODES.getStatusDescription(STATUS_CODES.BAD_REQUEST));
res.status(STATUS_CODES.getStatusCode("NOT_FOUND")).sendFile('/absolute/path/to/404.png');
```
