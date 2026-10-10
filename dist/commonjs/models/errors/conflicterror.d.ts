import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export type ConflictErrorData = {
    error: models.ConflictError;
};
/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export declare class ConflictError extends PatternrevealError {
    error: models.ConflictError;
    /** The original data that was passed to this error instance. */
    data$: ConflictErrorData;
    constructor(err: ConflictErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ConflictError$inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=conflicterror.d.ts.map