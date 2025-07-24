import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server has encountered a situation it does not know how to handle.
 */
export type InternalServerErrorData = {
    error: models.InternalServerErrorError;
};
/**
 * The server has encountered a situation it does not know how to handle.
 */
export declare class InternalServerError extends PatternrevealError {
    error: models.InternalServerErrorError;
    /** The original data that was passed to this error instance. */
    data$: InternalServerErrorData;
    constructor(err: InternalServerErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const InternalServerError$inboundSchema: z.ZodType<InternalServerError, z.ZodTypeDef, unknown>;
/** @internal */
export type InternalServerError$Outbound = {
    error: models.InternalServerErrorError$Outbound;
};
/** @internal */
export declare const InternalServerError$outboundSchema: z.ZodType<InternalServerError$Outbound, z.ZodTypeDef, InternalServerError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InternalServerError$ {
    /** @deprecated use `InternalServerError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InternalServerError, z.ZodTypeDef, unknown>;
    /** @deprecated use `InternalServerError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InternalServerError$Outbound, z.ZodTypeDef, InternalServerError>;
    /** @deprecated use `InternalServerError$Outbound` instead. */
    type Outbound = InternalServerError$Outbound;
}
//# sourceMappingURL=internalservererror.d.ts.map