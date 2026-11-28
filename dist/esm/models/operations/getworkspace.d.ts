import * as z from "zod/v3";
export type GetWorkspaceRequest = {
    /**
     * The ID or slug of the workspace.
     */
    idOrSlug: string;
};
/** @internal */
export type GetWorkspaceRequest$Outbound = {
    idOrSlug: string;
};
/** @internal */
export declare const GetWorkspaceRequest$outboundSchema: z.ZodType<GetWorkspaceRequest$Outbound, z.ZodTypeDef, GetWorkspaceRequest>;
export declare function getWorkspaceRequestToJSON(getWorkspaceRequest: GetWorkspaceRequest): string;
//# sourceMappingURL=getworkspace.d.ts.map