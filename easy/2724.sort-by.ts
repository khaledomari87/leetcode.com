// https://leetcode.com/problems/sort-by/solutions/7407613/one-line/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;
const sortBy = (arr: JSONValue[], fn: Fn) => arr.sort((a, b) => fn(a) - fn(b));
