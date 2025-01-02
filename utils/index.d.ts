export declare const ClassLimits: {
    Informational: {
        MIN: number;
        MAX: number;
    };
    Success: {
        MIN: number;
        MAX: number;
    };
    Redirectional: {
        MIN: number;
        MAX: number;
    };
    ClientError: {
        MIN: number;
        MAX: number;
    };
    ServerError: {
        MIN: number;
        MAX: number;
    };
};
/**
 * Checks if the given status code is an informational status code.
 * @name checkInformational
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is informational, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export declare const checkInformational: (STATUS_CODES: Object | undefined, code: number) => boolean;
/**
 * Returns all the informational HTTP status codes.
 * @name listInformationalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the informational HTTP status codes.
 */
export declare const listInformationalCodes: (STATUS_CODES?: Object) => number[];
/**
 * Checks if the given status code is a success status code.
 * @name checkSuccess
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is success, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export declare const checkSuccess: (STATUS_CODES: Object | undefined, code: number) => boolean;
/**
 * Returns all the success HTTP status codes.
 * @name listSuccessCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the success HTTP status codes.
 */
export declare const listSuccessCodes: (STATUS_CODES?: Object) => number[];
/**
 * Checks if the given status code is a redirectional status code.
 * @name checkRedirectional
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is redirectional, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export declare const checkRedirectional: (STATUS_CODES: Object | undefined, code: number) => boolean;
/**
 * Returns all the redirectional HTTP status codes.
 * @name listRedirectionalCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the redirectional HTTP status codes.
 */
export declare const listRedirectionalCodes: (STATUS_CODES?: Object) => number[];
/**
 * Checks if the given status code is a client error status code.
 * @name checkClientError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is client error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export declare const checkClientError: (STATUS_CODES: Object | undefined, code: number) => boolean;
/**
 * Returns all the client side error HTTP status codes.
 * @name listClientErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the client side error HTTP status codes.
 */
export declare const listClientErrorCodes: (STATUS_CODES?: Object) => number[];
/**
 * Checks if the given status code is a server error status code.
 * @name checkServerError
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is server error, false otherwise.
 * @throws {Error} If the status code does not exist.
 */
export declare const checkServerError: (STATUS_CODES: Object | undefined, code: number) => boolean;
/**
 * Returns all the server side error HTTP status codes.
 * @name listServerErrorCodes
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @returns {Array<number>} An array of all the server side error HTTP status codes.
 */
export declare const listServerErrorCodes: (STATUS_CODES?: Object) => number[];
/**
 * Checks if the given status code is valid.
 * @name checkValidStatusCode
 * @param {Object} STATUS_CODES - The Status Code Number.
 * @param {number} code - The Status Code Number.
 * @returns {boolean} True if the status code is valid, false otherwise.
 */
export declare const checkValidStatusCode: (STATUS_CODES: Object | undefined, code: number) => boolean;
