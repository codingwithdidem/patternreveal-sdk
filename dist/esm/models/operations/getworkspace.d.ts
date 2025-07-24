import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetWorkspaceRequest = {
    /**
     * The ID or slug of the workspace.
     */
    idOrSlug: string;
};
/** @internal */
export declare const GetWorkspaceRequest$inboundSchema: z.ZodType<GetWorkspaceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetWorkspaceRequest$Outbound = {
    idOrSlug: string;
};
/** @internal */
export declare const GetWorkspaceRequest$outboundSchema: z.ZodType<GetWorkspaceRequest$Outbound, z.ZodTypeDef, GetWorkspaceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetWorkspaceRequest$ {
    /** @deprecated use `GetWorkspaceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetWorkspaceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetWorkspaceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetWorkspaceRequest$Outbound, z.ZodTypeDef, GetWorkspaceRequest>;
    /** @deprecated use `GetWorkspaceRequest$Outbound` instead. */
    type Outbound = GetWorkspaceRequest$Outbound;
}
export declare function getWorkspaceRequestToJSON(getWorkspaceRequest: GetWorkspaceRequest): string;
export declare function getWorkspaceRequestFromJSON(jsonString: string): SafeParseResult<GetWorkspaceRequest, SDKValidationError>;
//# sourceMappingURL=getworkspace.d.ts.map