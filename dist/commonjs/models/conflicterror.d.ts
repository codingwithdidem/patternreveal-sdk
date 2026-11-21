import * as z from "zod/v3";
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
export declare const ConflictError$inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
export declare function conflictErrorFromJSON(jsonString: string): SafeParseResult<ConflictError, SDKValidationError>;
//# sourceMappingURL=conflicterror.d.ts.map