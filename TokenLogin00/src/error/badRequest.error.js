import { BaseError } from "./base.error.js";

// class trong khái niệm OOP
export class BadRequestError extends BaseError {
    constructor(message) {
        super(message)
        this.statusCode = 400;
    }
}
