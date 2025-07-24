import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const BadRequestCode: {
    readonly BadRequest: "bad_request";
};
/**
 * A short code indicating the error code returned.
 */
export type BadRequestCode = ClosedEnum<typeof BadRequestCode>;
export type BadRequestError = {
    /**
     * A short code indicating the error code returned.
     */
    code: BadRequestCode;
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
export declare const BadRequestCode$inboundSchema: z.ZodNativeEnum<typeof BadRequestCode>;
/** @internal */
export declare const BadRequestCode$outboundSchema: z.ZodNativeEnum<typeof BadRequestCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BadRequestCode$ {
    /** @deprecated use `BadRequestCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly BadRequest: "bad_request";
    }>;
    /** @deprecated use `BadRequestCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly BadRequest: "bad_request";
    }>;
}
/** @internal */
export declare const BadRequestError$inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
/** @internal */
export type BadRequestError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const BadRequestError$outboundSchema: z.ZodType<BadRequestError$Outbound, z.ZodTypeDef, BadRequestError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BadRequestError$ {
    /** @deprecated use `BadRequestError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
    /** @deprecated use `BadRequestError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BadRequestError$Outbound, z.ZodTypeDef, BadRequestError>;
    /** @deprecated use `BadRequestError$Outbound` instead. */
    type Outbound = BadRequestError$Outbound;
}
export declare function badRequestErrorToJSON(badRequestError: BadRequestError): string;
export declare function badRequestErrorFromJSON(jsonString: string): SafeParseResult<BadRequestError, SDKValidationError>;
//# sourceMappingURL=badrequesterror.d.ts.map