import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server has encountered a situation it does not know how to handle.
 */
export type InternalServerErrorData = {
    error: models.InternalServerErrorError;
};
/**
 * The server has encountered a situation it does not know how to handle.
 */
export declare class InternalServerError extends PatternrevealError {
    error: models.InternalServerErrorError;
    /** The original data that was passed to this error instance. */
    data$: InternalServerErrorData;
    constructor(err: InternalServerErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const InternalServerError$inboundSchema: z.ZodType<InternalServerError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=internalservererror.d.ts.map