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
 * Interface for a list of codes.
 * @interface ICodeList
 * @property {number} key - The key for the code.
 * @property {number} value - The value associated with the key.
 */
export interface ICodeList {
    [key: number]: number;
}
