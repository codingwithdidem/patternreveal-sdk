import { PatternrevealCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { PatternrevealError } from "../models/errors/patternrevealerror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a workspace
 *
 * @remarks
 * Update a workspace by ID or slug.
 */
export declare function workspacesUpdate(client: PatternrevealCore, idOrSlug: string, requestBody?: operations.UpdateWorkspaceRequestBody | undefined, options?: RequestOptions): APIPromise<Result<models.WorkspaceSchema, errors.BadRequestError | errors.UnauthorizedError | errors.ForbiddenError | errors.NotFoundError | errors.ConflictError | errors.InviteExpiredError | errors.UnprocessableEntityError | errors.RateLimitExceededError | errors.InternalServerError | PatternrevealError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=workspacesUpdate.d.ts.map