// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/6377683/single-iteration-and-constant-space/

function areAlmostEqual(s1: string, s2: string) {
    let count = 0;
    for (let i = 0, swap = -1; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (
                ++count > 2 || count === 2 &&
                    (s1[swap] !== s2[i] || s2[swap] !== s1[i])
            ) return false;
            swap = i;
        }
    }
    return count !== 1;
}
