import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const ConflictCode: {
    readonly Conflict: "conflict";
};
/**
 * A short code indicating the error code returned.
 */
export type ConflictCode = ClosedEnum<typeof ConflictCode>;
export type ConflictError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ConflictCode;
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
export declare const ConflictCode$inboundSchema: z.ZodNativeEnum<typeof ConflictCode>;
/** @internal */
export declare const ConflictCode$outboundSchema: z.ZodNativeEnum<typeof ConflictCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictCode$ {
    /** @deprecated use `ConflictCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Conflict: "conflict";
    }>;
    /** @deprecated use `ConflictCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Conflict: "conflict";
    }>;
}
/** @internal */
export declare const ConflictError$inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const ConflictError$outboundSchema: z.ZodType<ConflictError$Outbound, z.ZodTypeDef, ConflictError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictError$ {
    /** @deprecated use `ConflictError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictError$Outbound, z.ZodTypeDef, ConflictError>;
    /** @deprecated use `ConflictError$Outbound` instead. */
    type Outbound = ConflictError$Outbound;
}
export declare function conflictErrorToJSON(conflictError: ConflictError): string;
export declare function conflictErrorFromJSON(jsonString: string): SafeParseResult<ConflictError, SDKValidationError>;
//# sourceMappingURL=conflicterror.d.ts.map