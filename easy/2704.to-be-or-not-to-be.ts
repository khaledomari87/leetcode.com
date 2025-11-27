// https://leetcode.com/problems/to-be-or-not-to-be/solutions/7377255/clean/

// deno-lint-ignore-file no-explicit-any
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
const expect = (sourcVal: any) => ({
    toBe: (destVal: any) => {
        if (destVal === sourcVal) return true;
        throw new Error('Not Equal');
    },
    notToBe: (destVal: any) => {
        if (destVal !== sourcVal) return true;
        throw new Error('Equal');
    },
} as ToBeOrNotToBe);
