import * as z from "zod/v3";
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
export declare const InviteExpiredError$inboundSchema: z.ZodType<InviteExpiredError, z.ZodTypeDef, unknown>;
export declare function inviteExpiredErrorFromJSON(jsonString: string): SafeParseResult<InviteExpiredError, SDKValidationError>;
//# sourceMappingURL=inviteexpirederror.d.ts.map