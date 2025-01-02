export const ClassLimits = {
    Informational: {
        MIN: 100,
        MAX: 199,
    },
    Success: {
        MIN: 200,
        MAX: 299,
    },
    Redirectional: {
        MIN: 300,
        MAX: 399,
    },
    ClientError: {
        MIN: 400,
        MAX: 499,
    },
    ServerError: {
        MIN: 500,
        MAX: 599,
    },
};

/**
 * Checks if the given status code is an informational status code.
 * @name checkInformational
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is informational, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export const checkInformational = function (
    STATUS_CODES: Object = {},
    code: number
) {
    STATUS_CODES = STATUS_CODES ?? {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return (
            code <= ClassLimits.Informational.MAX &&
            code >= ClassLimits.Informational.MIN
        );
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns all the informational HTTP status codes.
 * @name listInformationalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the informational HTTP status codes.
 */
export const listInformationalCodes = function (STATUS_CODES: Object = {}) {
    STATUS_CODES = STATUS_CODES ?? {};
    var informationalCodes = [];
    for (
        var code = ClassLimits.Informational.MIN;
        code <= ClassLimits.Informational.MAX;
        code++
    ) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            informationalCodes.push(code);
        }
    }
    return informationalCodes;
};

/**
 * Checks if the given status code is a success status code.
 * @name checkSuccess
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is success, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export const checkSuccess = function (STATUS_CODES: Object = {}, code: number) {
    STATUS_CODES = STATUS_CODES ?? {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return (
            code <= ClassLimits.Success.MAX && code >= ClassLimits.Success.MIN
        );
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns all the success HTTP status codes.
 * @name listSuccessCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the success HTTP status codes.
 */
export const listSuccessCodes = function (STATUS_CODES: Object = {}) {
    STATUS_CODES = STATUS_CODES ?? {};
    var successCodes = [];
    for (
        var code = ClassLimits.Success.MIN;
        code <= ClassLimits.Success.MAX;
        code++
    ) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            successCodes.push(code);
        }
    }
    return successCodes;
};

/**
 * Checks if the given status code is a redirectional status code.
 * @name checkRedirectional
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is redirectional, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export const checkRedirectional = function (
    STATUS_CODES: Object = {},
    code: number
) {
    STATUS_CODES = STATUS_CODES ?? {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return (
            code <= ClassLimits.Redirectional.MAX &&
            code >= ClassLimits.Redirectional.MIN
        );
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns all the redirectional HTTP status codes.
 * @name listRedirectionalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the redirectional HTTP status codes.
 */
export const listRedirectionalCodes = function (STATUS_CODES: Object = {}) {
    STATUS_CODES = STATUS_CODES ?? {};
    var redirectionalCodes = [];
    for (
        var code = ClassLimits.Redirectional.MIN;
        code <= ClassLimits.Redirectional.MAX;
        code++
    ) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            redirectionalCodes.push(code);
        }
    }
    return redirectionalCodes;
};

/**
 * Checks if the given status code is a client error status code.
 * @name checkClientError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is client error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export const checkClientError = function (
    STATUS_CODES: Object = {},
    code: number
) {
    STATUS_CODES = STATUS_CODES ?? {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return (
            code <= ClassLimits.ClientError.MAX &&
            code >= ClassLimits.ClientError.MIN
        );
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns all the client side error HTTP status codes.
 * @name listClientErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the client side error HTTP status codes.
 */
export const listClientErrorCodes = function (STATUS_CODES: Object = {}) {
    STATUS_CODES = STATUS_CODES ?? {};
    var clientErrorCodes = [];
    for (
        var code = ClassLimits.ClientError.MIN;
        code <= ClassLimits.ClientError.MAX;
        code++
    ) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            clientErrorCodes.push(code);
        }
    }
    return clientErrorCodes;
};

/**
 * Checks if the given status code is a server error status code.
 * @name checkServerError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is server error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export const checkServerError = function (
    STATUS_CODES: Object = {},
    code: number
) {
    STATUS_CODES = STATUS_CODES ?? {};
    if (Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`)) {
        return (
            code <= ClassLimits.ServerError.MAX &&
            code >= ClassLimits.ServerError.MIN
        );
    } else {
        throw new Error(`Status code does not exist: ${code}`);
    }
};

/**
 * Returns all the server side error HTTP status codes.
 * @name listServerErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the server side error HTTP status codes.
 */
export const listServerErrorCodes = function (STATUS_CODES: Object = {}) {
    STATUS_CODES = STATUS_CODES ?? {};
    var serverErrorCodes = [];
    for (
        var code = ClassLimits.ServerError.MIN;
        code <= ClassLimits.ServerError.MAX;
        code++
    ) {
        if (Object.prototype.hasOwnProperty.call(STATUS_CODES, code)) {
            serverErrorCodes.push(code);
        }
    }
    return serverErrorCodes;
};

/**
 * Checks if the given status code is valid.
 * @name checkValidStatusCode
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is valid, false otherwise.
 */
export const checkValidStatusCode = function (
    STATUS_CODES: Object = {},
    code: number
) {
    STATUS_CODES = STATUS_CODES ?? {};
    return Object.prototype.hasOwnProperty.call(STATUS_CODES, `${code}`);
};
