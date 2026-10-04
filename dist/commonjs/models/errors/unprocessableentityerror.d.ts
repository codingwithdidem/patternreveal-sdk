import * as z from "zod/v3";
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
//# sourceMappingURL=unprocessableentityerror.d.ts.map