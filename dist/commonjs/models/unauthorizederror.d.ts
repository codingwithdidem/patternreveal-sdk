import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const UnauthorizedCode: {
    readonly Unauthorized: "unauthorized";
};
/**
 * A short code indicating the error code returned.
 */
export type UnauthorizedCode = ClosedEnum<typeof UnauthorizedCode>;
export type UnauthorizedError = {
    /**
     * A short code indicating the error code returned.
     */
    code: UnauthorizedCode;
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
export declare const UnauthorizedCode$inboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode>;
/** @internal */
export declare const UnauthorizedCode$outboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnauthorizedCode$ {
    /** @deprecated use `UnauthorizedCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unauthorized: "unauthorized";
    }>;
    /** @deprecated use `UnauthorizedCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unauthorized: "unauthorized";
    }>;
}
/** @internal */
export declare const UnauthorizedError$inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
/** @internal */
export type UnauthorizedError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const UnauthorizedError$outboundSchema: z.ZodType<UnauthorizedError$Outbound, z.ZodTypeDef, UnauthorizedError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnauthorizedError$ {
    /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnauthorizedError$Outbound, z.ZodTypeDef, UnauthorizedError>;
    /** @deprecated use `UnauthorizedError$Outbound` instead. */
    type Outbound = UnauthorizedError$Outbound;
}
export declare function unauthorizedErrorToJSON(unauthorizedError: UnauthorizedError): string;
export declare function unauthorizedErrorFromJSON(jsonString: string): SafeParseResult<UnauthorizedError, SDKValidationError>;
//# sourceMappingURL=unauthorizederror.d.ts.map