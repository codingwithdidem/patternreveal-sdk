import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export type BadRequestErrorData = {
    error: models.BadRequestError;
};
/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export declare class BadRequestError extends PatternrevealError {
    error: models.BadRequestError;
    /** The original data that was passed to this error instance. */
    data$: BadRequestErrorData;
    constructor(err: BadRequestErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const BadRequestError$inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=badrequesterror.d.ts.map