import * as z from "zod/v3";
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
export declare const InternalServerErrorError$inboundSchema: z.ZodType<InternalServerErrorError, z.ZodTypeDef, unknown>;
export declare function internalServerErrorErrorFromJSON(jsonString: string): SafeParseResult<InternalServerErrorError, SDKValidationError>;
//# sourceMappingURL=internalservererror.d.ts.map