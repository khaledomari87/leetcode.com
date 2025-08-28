// https://leetcode.com/problems/return-length-of-arguments-passed/solutions/7132629/one-line/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
const argumentsLength = (...args: JSONValue[]) => args.length;
