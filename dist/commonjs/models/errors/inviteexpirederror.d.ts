import * as z from "zod/v3";
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
//# sourceMappingURL=inviteexpirederror.d.ts.map