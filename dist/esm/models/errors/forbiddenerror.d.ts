import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export type ForbiddenErrorData = {
    error: models.ForbiddenError;
};
/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export declare class ForbiddenError extends PatternrevealError {
    error: models.ForbiddenError;
    /** The original data that was passed to this error instance. */
    data$: ForbiddenErrorData;
    constructor(err: ForbiddenErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ForbiddenError$inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
/** @internal */
export type ForbiddenError$Outbound = {
    error: models.ForbiddenError$Outbound;
};
/** @internal */
export declare const ForbiddenError$outboundSchema: z.ZodType<ForbiddenError$Outbound, z.ZodTypeDef, ForbiddenError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForbiddenError$ {
    /** @deprecated use `ForbiddenError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForbiddenError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForbiddenError$Outbound, z.ZodTypeDef, ForbiddenError>;
    /** @deprecated use `ForbiddenError$Outbound` instead. */
    type Outbound = ForbiddenError$Outbound;
}
//# sourceMappingURL=forbiddenerror.d.ts.map