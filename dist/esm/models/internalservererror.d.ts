import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const InternalServerErrorCode: {
    readonly InternalServerError: "internal_server_error";
};
/**
 * A short code indicating the error code returned.
 */
export type InternalServerErrorCode = ClosedEnum<typeof InternalServerErrorCode>;
export type InternalServerErrorError = {
    /**
     * A short code indicating the error code returned.
     */
    code: InternalServerErrorCode;
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
export declare const InternalServerErrorCode$inboundSchema: z.ZodNativeEnum<typeof InternalServerErrorCode>;
/** @internal */
export declare const InternalServerErrorCode$outboundSchema: z.ZodNativeEnum<typeof InternalServerErrorCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InternalServerErrorCode$ {
    /** @deprecated use `InternalServerErrorCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly InternalServerError: "internal_server_error";
    }>;
    /** @deprecated use `InternalServerErrorCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly InternalServerError: "internal_server_error";
    }>;
}
/** @internal */
export declare const InternalServerErrorError$inboundSchema: z.ZodType<InternalServerErrorError, z.ZodTypeDef, unknown>;
/** @internal */
export type InternalServerErrorError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const InternalServerErrorError$outboundSchema: z.ZodType<InternalServerErrorError$Outbound, z.ZodTypeDef, InternalServerErrorError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InternalServerErrorError$ {
    /** @deprecated use `InternalServerErrorError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InternalServerErrorError, z.ZodTypeDef, unknown>;
    /** @deprecated use `InternalServerErrorError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InternalServerErrorError$Outbound, z.ZodTypeDef, InternalServerErrorError>;
    /** @deprecated use `InternalServerErrorError$Outbound` instead. */
    type Outbound = InternalServerErrorError$Outbound;
}
export declare function internalServerErrorErrorToJSON(internalServerErrorError: InternalServerErrorError): string;
export declare function internalServerErrorErrorFromJSON(jsonString: string): SafeParseResult<InternalServerErrorError, SDKValidationError>;
//# sourceMappingURL=internalservererror.d.ts.map