import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server cannot find the requested resource.
 */
export type NotFoundErrorData = {
    error: models.NotFoundError;
};
/**
 * The server cannot find the requested resource.
 */
export declare class NotFoundError extends PatternrevealError {
    error: models.NotFoundError;
    /** The original data that was passed to this error instance. */
    data$: NotFoundErrorData;
    constructor(err: NotFoundErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const NotFoundError$inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=notfounderror.d.ts.map