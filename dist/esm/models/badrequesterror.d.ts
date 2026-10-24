import * as z from "zod/v3";
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
export declare const BadRequestError$inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
export declare function badRequestErrorFromJSON(jsonString: string): SafeParseResult<BadRequestError, SDKValidationError>;
//# sourceMappingURL=badrequesterror.d.ts.map