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

/**
 * Interface representing a Web Standard ResponseInit compatible object.
 * @interface IResponseInit
 * @property {number} status - HTTP status code.
 * @property {string} statusText - HTTP status description (status text).
 */
export interface IResponseInit {
    status: number;
    statusText: string;
    [key: string]: any;
}
