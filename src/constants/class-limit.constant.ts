import { IClassLimits, IClassType } from "../interfaces";

/**
 * The HTTP status code class types.
 * @constant {Object<string, string>}
 */
export const ClassTypes: IClassType = {
    INFORMATIONAL: "Informational",
    SUCCESS: "Success",
    REDIRECTION: "Redirectional",
    CLIENT_ERROR: "ClientError",
    SERVER_ERROR: "ServerError",
};

/**
 * The class limits for HTTP status codes.
 * @constant {IClassLimits} ClassLimits - The class limits for HTTP status codes.
 * @type {Object<string, {MIN: number, MAX: number}>}
 */
export const ClassLimits: IClassLimits = {
    /**
     * Informational status codes (100-199).
     * @property {Object}
     * @property {number} MIN - The minimum value for informational status codes.
     * @property {number} MAX - The maximum value for informational status codes.
     */
    [ClassTypes.INFORMATIONAL]: {
        MIN: 100,
        MAX: 199,
    },
    /**
     * Success status codes (200-299).
     * @property {Object}
     * @property {number} MIN - The minimum value for success status codes.
     * @property {number} MAX - The maximum value for success status codes.
     */
    [ClassTypes.SUCCESS]: {
        MIN: 200,
        MAX: 299,
    },
    /**
     * Redirectional status codes (300-399).
     * @property {Object}
     * @property {number} MIN - The minimum value for redirection status codes.
     * @property {number} MAX - The maximum value for redirection status codes.
     */
    [ClassTypes.REDIRECTION]: {
        MIN: 300,
        MAX: 399,
    },
    /**
     * Client error status codes (400-499).
     * @property {Object}
     * @property {number} MIN - The minimum value for client error status codes.
     * @property {number} MAX - The maximum value for client error status codes.
     */
    [ClassTypes.CLIENT_ERROR]: {
        MIN: 400,
        MAX: 499,
    },
    /**
     * Server error status codes (500-599).
     * @property {Object}
     * @property {number} MIN - The minimum value for server error status codes.
     * @property {number} MAX - The maximum value for server error status codes.
     */
    [ClassTypes.SERVER_ERROR]: {
        MIN: 500,
        MAX: 599,
    },
};
