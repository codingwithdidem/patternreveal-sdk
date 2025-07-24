import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export type UnprocessableEntityErrorData = {
    error: models.UnprocessableEntityError;
};
/**
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export declare class UnprocessableEntityError extends PatternrevealError {
    error: models.UnprocessableEntityError;
    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityErrorData;
    constructor(err: UnprocessableEntityErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const UnprocessableEntityError$inboundSchema: z.ZodType<UnprocessableEntityError, z.ZodTypeDef, unknown>;
/** @internal */
export type UnprocessableEntityError$Outbound = {
    error: models.UnprocessableEntityError$Outbound;
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
//# sourceMappingURL=unprocessableentityerror.d.ts.map