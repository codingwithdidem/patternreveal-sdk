import * as z from "zod/v3";
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
export declare const NotFoundError$inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
export declare function notFoundErrorFromJSON(jsonString: string): SafeParseResult<NotFoundError, SDKValidationError>;
//# sourceMappingURL=notfounderror.d.ts.map