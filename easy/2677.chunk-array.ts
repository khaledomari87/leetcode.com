// https://leetcode.com/problems/chunk-array/solutions/7416529/arrayslice/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;
function chunk(arr: Obj[], size: number) {
    const res: Obj[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
