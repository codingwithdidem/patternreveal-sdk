import * as z from "zod/v3";
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
export type UpdateWorkspaceRequestBody$Outbound = {
    name?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const UpdateWorkspaceRequestBody$outboundSchema: z.ZodType<UpdateWorkspaceRequestBody$Outbound, z.ZodTypeDef, UpdateWorkspaceRequestBody>;
export declare function updateWorkspaceRequestBodyToJSON(updateWorkspaceRequestBody: UpdateWorkspaceRequestBody): string;
/** @internal */
export type UpdateWorkspaceRequest$Outbound = {
    idOrSlug: string;
    RequestBody?: UpdateWorkspaceRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateWorkspaceRequest$outboundSchema: z.ZodType<UpdateWorkspaceRequest$Outbound, z.ZodTypeDef, UpdateWorkspaceRequest>;
export declare function updateWorkspaceRequestToJSON(updateWorkspaceRequest: UpdateWorkspaceRequest): string;
//# sourceMappingURL=updateworkspace.d.ts.map