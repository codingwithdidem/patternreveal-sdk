import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
export declare class Workspaces extends ClientSDK {
    /**
     * Retrieve a workspace
     *
     * @remarks
     * Retrieve a workspace for the authenticated user.
     */
    get(request: operations.GetWorkspaceRequest, options?: RequestOptions): Promise<models.WorkspaceSchema>;
    /**
     * Update a workspace
     *
     * @remarks
     * Update a workspace by ID or slug.
     */
    update(idOrSlug: string, requestBody?: operations.UpdateWorkspaceRequestBody | undefined, options?: RequestOptions): Promise<models.WorkspaceSchema>;
}
//# sourceMappingURL=workspaces.d.ts.map