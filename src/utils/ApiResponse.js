
class ApiResponse {
    constructor(statusCode, message, data, second, anythingElse="no properties") {
        

        this.statusCode = statusCode;
        this.success = statusCode < 400;
        this.success = true;
        this.message = message;
        this.data = data;
        this.second = second;
        this.anythingElse = anythingElse;
    }   
}

export {ApiResponse};