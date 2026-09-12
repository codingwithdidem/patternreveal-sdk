import * as z from "zod/v3";
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
export declare const UnauthorizedError$inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
export declare function unauthorizedErrorFromJSON(jsonString: string): SafeParseResult<UnauthorizedError, SDKValidationError>;
//# sourceMappingURL=unauthorizederror.d.ts.map