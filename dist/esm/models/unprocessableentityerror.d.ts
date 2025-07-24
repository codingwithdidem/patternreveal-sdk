import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const UnprocessableEntityCode: {
    readonly UnprocessableEntity: "unprocessable_entity";
};
/**
 * A short code indicating the error code returned.
 */
export type UnprocessableEntityCode = ClosedEnum<typeof UnprocessableEntityCode>;
export type UnprocessableEntityError = {
    /**
     * A short code indicating the error code returned.
     */
    code: UnprocessableEntityCode;
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
export declare const UnprocessableEntityCode$inboundSchema: z.ZodNativeEnum<typeof UnprocessableEntityCode>;
/** @internal */
export declare const UnprocessableEntityCode$outboundSchema: z.ZodNativeEnum<typeof UnprocessableEntityCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnprocessableEntityCode$ {
    /** @deprecated use `UnprocessableEntityCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly UnprocessableEntity: "unprocessable_entity";
    }>;
    /** @deprecated use `UnprocessableEntityCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly UnprocessableEntity: "unprocessable_entity";
    }>;
}
/** @internal */
export declare const UnprocessableEntityError$inboundSchema: z.ZodType<UnprocessableEntityError, z.ZodTypeDef, unknown>;
/** @internal */
export type UnprocessableEntityError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const UnprocessableEntityError$outboundSchema: z.ZodType<UnprocessableEntityError$Outbound, z.ZodTypeDef, UnprocessableEntityError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnprocessableEntityError$ {
    /** @deprecated use `UnprocessableEntityError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnprocessableEntityError, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnprocessableEntityError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnprocessableEntityError$Outbound, z.ZodTypeDef, UnprocessableEntityError>;
    /** @deprecated use `UnprocessableEntityError$Outbound` instead. */
    type Outbound = UnprocessableEntityError$Outbound;
}
export declare function unprocessableEntityErrorToJSON(unprocessableEntityError: UnprocessableEntityError): string;
export declare function unprocessableEntityErrorFromJSON(jsonString: string): SafeParseResult<UnprocessableEntityError, SDKValidationError>;
//# sourceMappingURL=unprocessableentityerror.d.ts.map