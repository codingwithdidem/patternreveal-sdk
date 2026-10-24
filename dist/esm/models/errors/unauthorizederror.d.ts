import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export type UnauthorizedErrorData = {
    error: models.UnauthorizedError;
};
/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export declare class UnauthorizedError extends PatternrevealError {
    error: models.UnauthorizedError;
    /** The original data that was passed to this error instance. */
    data$: UnauthorizedErrorData;
    constructor(err: UnauthorizedErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const UnauthorizedError$inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=unauthorizederror.d.ts.map