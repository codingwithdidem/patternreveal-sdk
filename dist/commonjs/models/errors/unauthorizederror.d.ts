import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export type UnauthorizedErrorData = {
    error: models.UnauthorizedError;
};
/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export declare class UnauthorizedError extends PatternrevealError {
    error: models.UnauthorizedError;
    /** The original data that was passed to this error instance. */
    data$: UnauthorizedErrorData;
    constructor(err: UnauthorizedErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const UnauthorizedError$inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
/** @internal */
export type UnauthorizedError$Outbound = {
    error: models.UnauthorizedError$Outbound;
};
/** @internal */
export declare const UnauthorizedError$outboundSchema: z.ZodType<UnauthorizedError$Outbound, z.ZodTypeDef, UnauthorizedError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnauthorizedError$ {
    /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnauthorizedError$Outbound, z.ZodTypeDef, UnauthorizedError>;
    /** @deprecated use `UnauthorizedError$Outbound` instead. */
    type Outbound = UnauthorizedError$Outbound;
}
//# sourceMappingURL=unauthorizederror.d.ts.map