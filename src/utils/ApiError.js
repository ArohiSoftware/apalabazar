
class ApiError extends Error {

    constructor(
        status,
        message,
        errors,
        data = null,
        stack = null
    ) 
    {
        super(message, errors);
        this.status = status;
        this.success = false;
        this.message = message;
        this.errors = message;
        this.data = message;

        if(stack) {
            this.stack = stack;
        }

        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {
    ApiError
}