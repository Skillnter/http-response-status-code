/**
 * Interface for HTTP status codes mappings.
 * @interface IHttpStatusMappings
 * @property {number} code - HTTP status code.
 * @property {string} description - HTTP status code description.
 */
export interface IHttpStatusMappings {
    [key: string]: {
        code: number;
        description: string;
    };
}

/**
 * Interface for HTTP status codes names.
 * @interface IHttpStatusNames
 * @property {number} code - HTTP status code.
 * @property {string} name - HTTP status code name.
 */
export interface IHttpStatusNames {
    [key: number]: string;
}

/**
 * Interface for HTTP status codes.
 * @interface IHttpStatusCodes
 * @property {number} [key] - HTTP status code.
 */
export interface IHttpStatusCodes {
    [key: string]: number;
}

/**
 * Interface for HTTP status codes descriptions.
 * @interface IHttpStatusDescriptions
 * @property {string} [code] - HTTP status code description.
 */
export interface IHttpStatusDescriptions {
    [key: number]: string;
}

/**
 * Type representing a list of HTTP status codes.
 */
export type ICodeList = number[];
