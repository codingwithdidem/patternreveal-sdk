import * as z from "zod/v3";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The user has sent too many requests in a given amount of time ("rate limiting")
 */
export type RateLimitExceededErrorData = {
    error: models.RateLimitExceededError;
};
/**
 * The user has sent too many requests in a given amount of time ("rate limiting")
 */
export declare class RateLimitExceededError extends PatternrevealError {
    error: models.RateLimitExceededError;
    /** The original data that was passed to this error instance. */
    data$: RateLimitExceededErrorData;
    constructor(err: RateLimitExceededErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const RateLimitExceededError$inboundSchema: z.ZodType<RateLimitExceededError, z.ZodTypeDef, unknown>;
//# sourceMappingURL=ratelimitexceedederror.d.ts.map