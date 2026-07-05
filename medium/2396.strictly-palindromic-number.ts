// https://leetcode.com/problems/strictly-palindromic-number/solutions/8375872/two-approaches/

function isStrictlyPalindromic(n: number) {
    for (let i = 2, end = n - 1; i < end; i++) {
        const num = n.toString(i);
        for (let j = 0, h = num.length / 2; j < h; j++) {
            if (num[j] !== num.at(-j - 1)!) return false;
        }
    }
    return true;
}

const isStrictlyPalindromic2 = (n: number) => false;
