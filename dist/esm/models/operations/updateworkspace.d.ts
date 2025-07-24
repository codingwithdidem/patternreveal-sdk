import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateWorkspaceRequestBody = {
    name?: string | undefined;
    slug?: string | undefined;
};
export type UpdateWorkspaceRequest = {
    /**
     * The ID or slug of the workspace to update.
     */
    idOrSlug: string;
    requestBody?: UpdateWorkspaceRequestBody | undefined;
};
/** @internal */
export declare const UpdateWorkspaceRequestBody$inboundSchema: z.ZodType<UpdateWorkspaceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateWorkspaceRequestBody$Outbound = {
    name?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const UpdateWorkspaceRequestBody$outboundSchema: z.ZodType<UpdateWorkspaceRequestBody$Outbound, z.ZodTypeDef, UpdateWorkspaceRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateWorkspaceRequestBody$ {
    /** @deprecated use `UpdateWorkspaceRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateWorkspaceRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateWorkspaceRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateWorkspaceRequestBody$Outbound, z.ZodTypeDef, UpdateWorkspaceRequestBody>;
    /** @deprecated use `UpdateWorkspaceRequestBody$Outbound` instead. */
    type Outbound = UpdateWorkspaceRequestBody$Outbound;
}
export declare function updateWorkspaceRequestBodyToJSON(updateWorkspaceRequestBody: UpdateWorkspaceRequestBody): string;
export declare function updateWorkspaceRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateWorkspaceRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateWorkspaceRequest$inboundSchema: z.ZodType<UpdateWorkspaceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateWorkspaceRequest$Outbound = {
    idOrSlug: string;
    RequestBody?: UpdateWorkspaceRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateWorkspaceRequest$outboundSchema: z.ZodType<UpdateWorkspaceRequest$Outbound, z.ZodTypeDef, UpdateWorkspaceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateWorkspaceRequest$ {
    /** @deprecated use `UpdateWorkspaceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateWorkspaceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateWorkspaceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateWorkspaceRequest$Outbound, z.ZodTypeDef, UpdateWorkspaceRequest>;
    /** @deprecated use `UpdateWorkspaceRequest$Outbound` instead. */
    type Outbound = UpdateWorkspaceRequest$Outbound;
}
export declare function updateWorkspaceRequestToJSON(updateWorkspaceRequest: UpdateWorkspaceRequest): string;
export declare function updateWorkspaceRequestFromJSON(jsonString: string): SafeParseResult<UpdateWorkspaceRequest, SDKValidationError>;
//# sourceMappingURL=updateworkspace.d.ts.map