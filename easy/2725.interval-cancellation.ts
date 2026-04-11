// https://leetcode.com/problems/interval-cancellation/solutions/7870290/clean-tsjs/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
function cancellable(fn: (...args: JSONValue[]) => void, args: JSONValue[], t: number): () => void {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);
    return () => clearInterval(timer);
}
