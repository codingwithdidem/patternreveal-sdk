import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
/**
 * A short code indicating the error code returned.
 */
export declare const ForbiddenCode: {
    readonly Forbidden: "forbidden";
};
/**
 * A short code indicating the error code returned.
 */
export type ForbiddenCode = ClosedEnum<typeof ForbiddenCode>;
export type ForbiddenError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ForbiddenCode;
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
export declare const ForbiddenCode$inboundSchema: z.ZodNativeEnum<typeof ForbiddenCode>;
/** @internal */
export declare const ForbiddenError$inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
export declare function forbiddenErrorFromJSON(jsonString: string): SafeParseResult<ForbiddenError, SDKValidationError>;
//# sourceMappingURL=forbiddenerror.d.ts.map