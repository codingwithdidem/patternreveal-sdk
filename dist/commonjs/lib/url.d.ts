export type Params = Partial<Record<string, string | number>>;
export declare function pathToFunc(pathPattern: string, options?: {
    charEncoding?: "percent" | "none";
    rejectDotSegments?: boolean;
}): (params?: Params) => string;
//# sourceMappingURL=url.d.ts.map