// https://leetcode.com/problems/is-object-empty/solutions/7131013/two-approaches/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

// Time & Space: O(n)
const isEmpty = (obj: Obj) => !Object.keys(obj).length;

// Time & Space: O(1)
function isEmptyLoop(obj: Obj) {
    for (const key in obj) return false;
    return true;
}
