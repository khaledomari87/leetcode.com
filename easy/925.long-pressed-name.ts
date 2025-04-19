// https://leetcode.com/problems/long-pressed-name/solutions/6667689/two-pointers/

function isLongPressedName(N: string, T: string) {
    let n = 0, t = 0;
    while (n < N.length && t < T.length) {
        if (N[n] === T[t]) n++, t++;
        else if (t >= 1 && T[t] === T[t - 1]) t++;
        else return false;
    }
    return n === N.length && T.substring(t) === T[t - 1].repeat(T.length - t);
}
