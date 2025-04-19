// https://leetcode.com/problems/long-pressed-name/solutions/6667689/two-pointers/

function isLongPressedName(N: string, T: string) {
    if (N[0] !== T[0]) return false;
    let n = 1;
    for (let t = 1; n <= N.length && t < T.length; t++) {
        if (N[n] === T[t]) n++;
        else if (T[t] !== T[t - 1]) return false;
    }
    return n === N.length;
}
