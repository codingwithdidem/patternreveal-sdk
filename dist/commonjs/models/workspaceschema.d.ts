import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
export declare const Plan: {
    readonly Free: "free";
    readonly Pro: "pro";
};
export type Plan = ClosedEnum<typeof Plan>;
export declare const Role: {
    readonly Owner: "OWNER";
    readonly Member: "MEMBER";
};
export type Role = ClosedEnum<typeof Role>;
export type User = {
    role: Role;
};
export type WorkspaceSchema = {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
    inviteCode: string | null;
    billingCycleStart: number;
    plan: Plan;
    totalReflections: number;
    usage: number;
    usageLimit: number;
    reflectionsUsage: number;
    reflectionsLimit: number;
    aiUsage: number;
    aiLimit: number;
    usersLimit: number;
    store: {
        [k: string]: any;
    };
    users: Array<User>;
    createdAt: string;
    updatedAt: string;
    paddleCustomerId: string | null;
};
/** @internal */
export declare const Plan$inboundSchema: z.ZodNativeEnum<typeof Plan>;
/** @internal */
export declare const Role$inboundSchema: z.ZodNativeEnum<typeof Role>;
/** @internal */
export declare const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
export declare function userFromJSON(jsonString: string): SafeParseResult<User, SDKValidationError>;
/** @internal */
export declare const WorkspaceSchema$inboundSchema: z.ZodType<WorkspaceSchema, z.ZodTypeDef, unknown>;
export declare function workspaceSchemaFromJSON(jsonString: string): SafeParseResult<WorkspaceSchema, SDKValidationError>;
//# sourceMappingURL=workspaceschema.d.ts.map