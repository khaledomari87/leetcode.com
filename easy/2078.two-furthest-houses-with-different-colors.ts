// https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/7441459/linear-solution/

function maxDistance(colors: number[]) {
    let l = 0, r = colors.length - 1;
    for (const t = colors[0]; t === colors[r]; r--);
    for (const t = colors.at(-1)!; t === colors[l]; l++);
    return Math.max(colors.length - l - 1, r);
}
