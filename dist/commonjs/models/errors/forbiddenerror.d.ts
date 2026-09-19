import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export type ForbiddenErrorData = {
    error: models.ForbiddenError;
};
/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export declare class ForbiddenError extends PatternrevealError {
    error: models.ForbiddenError;
    /** The original data that was passed to this error instance. */
    data$: ForbiddenErrorData;
    constructor(err: ForbiddenErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ForbiddenError$inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=forbiddenerror.d.ts.map