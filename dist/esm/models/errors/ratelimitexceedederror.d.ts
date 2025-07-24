import * as z from "zod";
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
/** @internal */
export type RateLimitExceededError$Outbound = {
    error: models.RateLimitExceededError$Outbound;
};
/** @internal */
export declare const RateLimitExceededError$outboundSchema: z.ZodType<RateLimitExceededError$Outbound, z.ZodTypeDef, RateLimitExceededError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RateLimitExceededError$ {
    /** @deprecated use `RateLimitExceededError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RateLimitExceededError, z.ZodTypeDef, unknown>;
    /** @deprecated use `RateLimitExceededError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RateLimitExceededError$Outbound, z.ZodTypeDef, RateLimitExceededError>;
    /** @deprecated use `RateLimitExceededError$Outbound` instead. */
    type Outbound = RateLimitExceededError$Outbound;
}
//# sourceMappingURL=ratelimitexceedederror.d.ts.map