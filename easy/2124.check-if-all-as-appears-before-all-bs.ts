// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/7275613/one-line/

function checkString(s: string) {
    let b = false;
    for (const char of s) {
        if (b && char === 'a') return false;
        b = char === 'b';
    }
    return true;
}

// deno-fmt-ignore
const checkString2 = (s: string) => s.split('').every(
    (c, i) => !i || c === 'b' || s[i - 1] === 'a');

const checkString3 = (s: string) => !s.includes('ba');
