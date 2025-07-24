import { PatternrevealError } from "./patternrevealerror.js";
/** The fallback error class if no more specific error class is matched */
export declare class PatternrevealDefaultError extends PatternrevealError {
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
//# sourceMappingURL=patternrevealdefaulterror.d.ts.map