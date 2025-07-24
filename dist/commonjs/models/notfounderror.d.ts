import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const NotFoundCode: {
    readonly NotFound: "not_found";
};
/**
 * A short code indicating the error code returned.
 */
export type NotFoundCode = ClosedEnum<typeof NotFoundCode>;
export type NotFoundError = {
    /**
     * A short code indicating the error code returned.
     */
    code: NotFoundCode;
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
export declare const NotFoundCode$inboundSchema: z.ZodNativeEnum<typeof NotFoundCode>;
/** @internal */
export declare const NotFoundCode$outboundSchema: z.ZodNativeEnum<typeof NotFoundCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NotFoundCode$ {
    /** @deprecated use `NotFoundCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly NotFound: "not_found";
    }>;
    /** @deprecated use `NotFoundCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly NotFound: "not_found";
    }>;
}
/** @internal */
export declare const NotFoundError$inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
/** @internal */
export type NotFoundError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const NotFoundError$outboundSchema: z.ZodType<NotFoundError$Outbound, z.ZodTypeDef, NotFoundError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NotFoundError$ {
    /** @deprecated use `NotFoundError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
    /** @deprecated use `NotFoundError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NotFoundError$Outbound, z.ZodTypeDef, NotFoundError>;
    /** @deprecated use `NotFoundError$Outbound` instead. */
    type Outbound = NotFoundError$Outbound;
}
export declare function notFoundErrorToJSON(notFoundError: NotFoundError): string;
export declare function notFoundErrorFromJSON(jsonString: string): SafeParseResult<NotFoundError, SDKValidationError>;
//# sourceMappingURL=notfounderror.d.ts.map