import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export type ConflictErrorData = {
    error: models.ConflictError;
};
/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export declare class ConflictError extends PatternrevealError {
    error: models.ConflictError;
    /** The original data that was passed to this error instance. */
    data$: ConflictErrorData;
    constructor(err: ConflictErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ConflictError$inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictError$Outbound = {
    error: models.ConflictError$Outbound;
};
/** @internal */
export declare const ConflictError$outboundSchema: z.ZodType<ConflictError$Outbound, z.ZodTypeDef, ConflictError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictError$ {
    /** @deprecated use `ConflictError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictError$Outbound, z.ZodTypeDef, ConflictError>;
    /** @deprecated use `ConflictError$Outbound` instead. */
    type Outbound = ConflictError$Outbound;
}
//# sourceMappingURL=conflicterror.d.ts.map