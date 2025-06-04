export class GlobalAppException extends Error {
    public status:number;
    public code: string;
    public message: string;
    public details: string | string[];


    constructor(status: number, code:string,message:string,details:string | string[]) {
        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
        this.details = details;

        Object.setPrototypeOf(this,new.target.prototype);
        Error.captureStackTrace(this);
    }
}