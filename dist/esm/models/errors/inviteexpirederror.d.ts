import * as z from "zod";
import * as models from "../index.js";
import { PatternrevealError } from "./patternrevealerror.js";
/**
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
 */
export type InviteExpiredErrorData = {
    error: models.InviteExpiredError;
};
/**
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
 */
export declare class InviteExpiredError extends PatternrevealError {
    error: models.InviteExpiredError;
    /** The original data that was passed to this error instance. */
    data$: InviteExpiredErrorData;
    constructor(err: InviteExpiredErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const InviteExpiredError$inboundSchema: z.ZodType<InviteExpiredError, z.ZodTypeDef, unknown>;
/** @internal */
export type InviteExpiredError$Outbound = {
    error: models.InviteExpiredError$Outbound;
};
/** @internal */
export declare const InviteExpiredError$outboundSchema: z.ZodType<InviteExpiredError$Outbound, z.ZodTypeDef, InviteExpiredError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InviteExpiredError$ {
    /** @deprecated use `InviteExpiredError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InviteExpiredError, z.ZodTypeDef, unknown>;
    /** @deprecated use `InviteExpiredError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InviteExpiredError$Outbound, z.ZodTypeDef, InviteExpiredError>;
    /** @deprecated use `InviteExpiredError$Outbound` instead. */
    type Outbound = InviteExpiredError$Outbound;
}
//# sourceMappingURL=inviteexpirederror.d.ts.map