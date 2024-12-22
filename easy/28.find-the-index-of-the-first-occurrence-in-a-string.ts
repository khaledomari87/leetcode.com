// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/6175366/simple-and-efficient/

const strStr = (haystack: string, needle: string): number => {
    for (let h = 0; h < haystack.length; h++) {
        if (needle.length > haystack.length - h) break;
        let n = 0;
        while (n < needle.length && needle[n] === haystack[h + n]) n++;
        if (n === needle.length) return h;
    }
    return -1;
};
