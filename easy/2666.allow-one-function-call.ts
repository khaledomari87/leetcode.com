type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;
type OnceFnDefined = (...args: Parameters<OnceFn>) => Exclude<ReturnType<OnceFn>, undefined>;

function once(fn: OnceFnDefined): OnceFn {
    let called = false;
    return function (...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
}
