import * as z from "zod/v3";
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
export declare const UnprocessableEntityError$inboundSchema: z.ZodType<UnprocessableEntityError, z.ZodTypeDef, unknown>;
export declare function unprocessableEntityErrorFromJSON(jsonString: string): SafeParseResult<UnprocessableEntityError, SDKValidationError>;
//# sourceMappingURL=unprocessableentityerror.d.ts.map