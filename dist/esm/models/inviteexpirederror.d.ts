import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const InviteExpiredCode: {
    readonly InviteExpired: "invite_expired";
};
/**
 * A short code indicating the error code returned.
 */
export type InviteExpiredCode = ClosedEnum<typeof InviteExpiredCode>;
export type InviteExpiredError = {
    /**
     * A short code indicating the error code returned.
     */
    code: InviteExpiredCode;
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
export declare const InviteExpiredCode$inboundSchema: z.ZodNativeEnum<typeof InviteExpiredCode>;
/** @internal */
export declare const InviteExpiredCode$outboundSchema: z.ZodNativeEnum<typeof InviteExpiredCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InviteExpiredCode$ {
    /** @deprecated use `InviteExpiredCode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly InviteExpired: "invite_expired";
    }>;
    /** @deprecated use `InviteExpiredCode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly InviteExpired: "invite_expired";
    }>;
}
/** @internal */
export declare const InviteExpiredError$inboundSchema: z.ZodType<InviteExpiredError, z.ZodTypeDef, unknown>;
/** @internal */
export type InviteExpiredError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};
/** @internal */
export declare const InviteExpiredError$outboundSchema: z.ZodType<InviteExpiredError$Outbound, z.ZodTypeDef, InviteExpiredError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InviteExpiredError$ {
    /** @deprecated use `InviteExpiredError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InviteExpiredError, z.ZodTypeDef, unknown>;
    /** @deprecated use `InviteExpiredError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InviteExpiredError$Outbound, z.ZodTypeDef, InviteExpiredError>;
    /** @deprecated use `InviteExpiredError$Outbound` instead. */
    type Outbound = InviteExpiredError$Outbound;
}
export declare function inviteExpiredErrorToJSON(inviteExpiredError: InviteExpiredError): string;
export declare function inviteExpiredErrorFromJSON(jsonString: string): SafeParseResult<InviteExpiredError, SDKValidationError>;
//# sourceMappingURL=inviteexpirederror.d.ts.map