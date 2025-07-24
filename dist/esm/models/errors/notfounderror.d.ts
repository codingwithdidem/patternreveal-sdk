import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server cannot find the requested resource.
 */
export type NotFoundErrorData = {
    error: models.NotFoundError;
};
/**
 * The server cannot find the requested resource.
 */
export declare class NotFoundError extends PatternrevealError {
    error: models.NotFoundError;
    /** The original data that was passed to this error instance. */
    data$: NotFoundErrorData;
    constructor(err: NotFoundErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const NotFoundError$inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
/** @internal */
export type NotFoundError$Outbound = {
    error: models.NotFoundError$Outbound;
};
/** @internal */
export declare const NotFoundError$outboundSchema: z.ZodType<NotFoundError$Outbound, z.ZodTypeDef, NotFoundError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NotFoundError$ {
    /** @deprecated use `NotFoundError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown>;
    /** @deprecated use `NotFoundError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NotFoundError$Outbound, z.ZodTypeDef, NotFoundError>;
    /** @deprecated use `NotFoundError$Outbound` instead. */
    type Outbound = NotFoundError$Outbound;
}
//# sourceMappingURL=notfounderror.d.ts.map