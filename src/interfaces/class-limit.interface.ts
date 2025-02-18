/**
 * Represents an object containing limits for HTTP status code classes.
 * @interface IClassLimits
 * @property {Object} key - The key for the class.
 * @property {Object} key.MIN - The minimum value for the class.
 * @property {Object} key.MAX - The maximum value for the class.
 */
export interface IClassLimits {
    [key: string]: ILimits;
}

/**
 * Represents an object containing the minimum and maximum values for a class.
 * @interface ILimits
 * @property {number} MIN - The minimum value for the class.
 * @property {number} MAX - The maximum value for the class.
 */
export interface ILimits {
    MIN: number;
    MAX: number;
}

/**
 * Represents an object containing the class type for each HTTP status code.
 * @interface IClassType
 * @property {string} [key] - The class type for the HTTP status code.
 */
export interface IClassType {
    [key: string]: string;
}
