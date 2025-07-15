// https://leetcode.com/problems/valid-word/solutions/6960995/functional-programming/

function isValid(w: string) {
    if (w.length < 3) return false;
    const arr = w.toLowerCase().split('');
    if (arr.some((c) => '@#$'.includes(c))) return false;
    if (!arr.some((c) => 'aeiou'.includes(c))) return false;
    if (!arr.some((c) => 'bcdfghjklmnpqrstvwxyz'.includes(c))) return false;
    return arr.every((c) => c >= 'a' && c <= 'z' || !isNaN(+c));
}
