import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const RateLimitExceededCode: {
    readonly RateLimitExceeded: "rate_limit_exceeded";
};
/**
 * A short code indicating the error code returned.
 */
export type RateLimitExceededCode = ClosedEnum<typeof RateLimitExceededCode>;
export type RateLimitExceededError = {
    /**
     * A short code indicating the error code returned.
     */
    code: RateLimitExceededCode;
    /**
     * A human readable explanation of what went wrong.
     */
    message: string;
    /**
     * A link to our documentation with more details about this error code
     */
    docUrl?: string | undefined;
};
/** @internal */
export declare const RateLimitExceededCode$inboundSchema: z.ZodNativeEnum<typeof RateLimitExceededCode>;
/** @internal */
export declare const RateLimitExceededError$inboundSchema: z.ZodType<RateLimitExceededError, z.ZodTypeDef, unknown>;
export declare function rateLimitExceededErrorFromJSON(jsonString: string): SafeParseResult<RateLimitExceededError, SDKValidationError>;
//# sourceMappingURL=ratelimitexceedederror.d.ts.map