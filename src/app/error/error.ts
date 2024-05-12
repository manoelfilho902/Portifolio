import { HttpStatusCode } from "@angular/common/http";

export class BaseError implements Error{
    name: string;
    message: string;
    stack?: string | undefined;
    cause?: unknown;
    constructor(message: string, name?: string){
        this.name = name ? name : 'unamed error';
        this.message = message;
    }
}

export class HttpError extends BaseError{
    status: HttpStatusCode;

    constructor(message: string, status: HttpStatusCode){
        super(message)        
        this.status = status;
        this.name = 'Resquest error response';
    }
}