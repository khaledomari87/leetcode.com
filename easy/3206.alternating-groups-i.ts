// https://leetcode.com/problems/alternating-groups-i/solutions/6516648/clean-and-short-simulation/

function numberOfAlternatingGroups(colors: number[]) {
    let res = 0;
    for (let i = 1, n = colors.length, end = n + 2, cnt = 1; i < end; i++) {
        colors[i % n] === colors[(i - 1) % n] ? cnt = 1 : res += +(++cnt >= 3);
    }
    return res;
}
