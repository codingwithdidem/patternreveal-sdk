import * as z from "zod/v3";
export type Security = {
    token?: string | undefined;
};
/** @internal */
export type Security$Outbound = {
    token?: string | undefined;
};
/** @internal */
export declare const Security$outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security>;
export declare function securityToJSON(security: Security): string;
//# sourceMappingURL=security.d.ts.map