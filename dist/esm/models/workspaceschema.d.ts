import * as z from "zod";
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
    logo?: string | null | undefined;
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
export declare const Plan$outboundSchema: z.ZodNativeEnum<typeof Plan>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Plan$ {
    /** @deprecated use `Plan$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Free: "free";
        readonly Pro: "pro";
    }>;
    /** @deprecated use `Plan$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Free: "free";
        readonly Pro: "pro";
    }>;
}
/** @internal */
export declare const Role$inboundSchema: z.ZodNativeEnum<typeof Role>;
/** @internal */
export declare const Role$outboundSchema: z.ZodNativeEnum<typeof Role>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Role$ {
    /** @deprecated use `Role$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Owner: "OWNER";
        readonly Member: "MEMBER";
    }>;
    /** @deprecated use `Role$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Owner: "OWNER";
        readonly Member: "MEMBER";
    }>;
}
/** @internal */
export declare const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
/** @internal */
export type User$Outbound = {
    role: string;
};
/** @internal */
export declare const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace User$ {
    /** @deprecated use `User$inboundSchema` instead. */
    const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
    /** @deprecated use `User$outboundSchema` instead. */
    const outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
    /** @deprecated use `User$Outbound` instead. */
    type Outbound = User$Outbound;
}
export declare function userToJSON(user: User): string;
export declare function userFromJSON(jsonString: string): SafeParseResult<User, SDKValidationError>;
/** @internal */
export declare const WorkspaceSchema$inboundSchema: z.ZodType<WorkspaceSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type WorkspaceSchema$Outbound = {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
    inviteCode: string | null;
    billingCycleStart: number;
    plan: string;
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
    users: Array<User$Outbound>;
    createdAt: string;
    updatedAt: string;
    paddleCustomerId: string | null;
};
/** @internal */
export declare const WorkspaceSchema$outboundSchema: z.ZodType<WorkspaceSchema$Outbound, z.ZodTypeDef, WorkspaceSchema>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WorkspaceSchema$ {
    /** @deprecated use `WorkspaceSchema$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WorkspaceSchema, z.ZodTypeDef, unknown>;
    /** @deprecated use `WorkspaceSchema$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WorkspaceSchema$Outbound, z.ZodTypeDef, WorkspaceSchema>;
    /** @deprecated use `WorkspaceSchema$Outbound` instead. */
    type Outbound = WorkspaceSchema$Outbound;
}
export declare function workspaceSchemaToJSON(workspaceSchema: WorkspaceSchema): string;
export declare function workspaceSchemaFromJSON(jsonString: string): SafeParseResult<WorkspaceSchema, SDKValidationError>;
//# sourceMappingURL=workspaceschema.d.ts.map