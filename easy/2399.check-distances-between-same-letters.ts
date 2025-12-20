// https://leetcode.com/problems/check-distances-between-same-letters/solutions/7425586/one-pass/

const a = 'a'.charCodeAt(0);
const checkDistances = (s: string, distance: number[]) =>
    distance.every((d, i) => {
        const ch = String.fromCharCode(i + a);
        const first = s.indexOf(ch);
        return first === -1 || s.lastIndexOf(ch) - first === d + 1;
    });
