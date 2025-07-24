import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export type BadRequestErrorData = {
    error: models.BadRequestError;
};
/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export declare class BadRequestError extends PatternrevealError {
    error: models.BadRequestError;
    /** The original data that was passed to this error instance. */
    data$: BadRequestErrorData;
    constructor(err: BadRequestErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const BadRequestError$inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
/** @internal */
export type BadRequestError$Outbound = {
    error: models.BadRequestError$Outbound;
};
/** @internal */
export declare const BadRequestError$outboundSchema: z.ZodType<BadRequestError$Outbound, z.ZodTypeDef, BadRequestError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BadRequestError$ {
    /** @deprecated use `BadRequestError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown>;
    /** @deprecated use `BadRequestError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BadRequestError$Outbound, z.ZodTypeDef, BadRequestError>;
    /** @deprecated use `BadRequestError$Outbound` instead. */
    type Outbound = BadRequestError$Outbound;
}
//# sourceMappingURL=badrequesterror.d.ts.map