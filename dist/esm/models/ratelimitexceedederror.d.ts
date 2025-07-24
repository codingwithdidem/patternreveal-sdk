import * as z from "zod";
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
export declare const RateLimitExceededCode$outboundSchema: z.ZodNativeEnum<typeof RateLimitExceededCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RateLimitExceededCode$ {
    /** @deprecated use `RateLimitExceededCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly RateLimitExceeded: "rate_limit_exceeded";
    }>;
    /** @deprecated use `RateLimitExceededCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly RateLimitExceeded: "rate_limit_exceeded";
    }>;
}
/** @internal */
export declare const RateLimitExceededError$inboundSchema: z.ZodType<RateLimitExceededError, z.ZodTypeDef, unknown>;
/** @internal */
export type RateLimitExceededError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
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
export declare function rateLimitExceededErrorToJSON(rateLimitExceededError: RateLimitExceededError): string;
export declare function rateLimitExceededErrorFromJSON(jsonString: string): SafeParseResult<RateLimitExceededError, SDKValidationError>;
//# sourceMappingURL=ratelimitexceedederror.d.ts.map