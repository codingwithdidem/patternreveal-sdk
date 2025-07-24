import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const ForbiddenCode: {
    readonly Forbidden: "forbidden";
};
/**
 * A short code indicating the error code returned.
 */
export type ForbiddenCode = ClosedEnum<typeof ForbiddenCode>;
export type ForbiddenError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ForbiddenCode;
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
export declare const ForbiddenCode$inboundSchema: z.ZodNativeEnum<typeof ForbiddenCode>;
/** @internal */
export declare const ForbiddenCode$outboundSchema: z.ZodNativeEnum<typeof ForbiddenCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForbiddenCode$ {
    /** @deprecated use `ForbiddenCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Forbidden: "forbidden";
    }>;
    /** @deprecated use `ForbiddenCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Forbidden: "forbidden";
    }>;
}
/** @internal */
export declare const ForbiddenError$inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
/** @internal */
export type ForbiddenError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const ForbiddenError$outboundSchema: z.ZodType<ForbiddenError$Outbound, z.ZodTypeDef, ForbiddenError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForbiddenError$ {
    /** @deprecated use `ForbiddenError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForbiddenError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForbiddenError$Outbound, z.ZodTypeDef, ForbiddenError>;
    /** @deprecated use `ForbiddenError$Outbound` instead. */
    type Outbound = ForbiddenError$Outbound;
}
export declare function forbiddenErrorToJSON(forbiddenError: ForbiddenError): string;
export declare function forbiddenErrorFromJSON(jsonString: string): SafeParseResult<ForbiddenError, SDKValidationError>;
//# sourceMappingURL=forbiddenerror.d.ts.map