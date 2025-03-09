// https://leetcode.com/problems/alternating-groups-ii/solutions/6516597/clean-and-short-simulation/

function numberOfAlternatingGroups(colors: number[], k: number) {
    let res = 0;
    for (
        let i = 1, n = colors.length, end = n + k - 1, cnt = 1;
        i < end;
        i++
    ) colors[i % n] === colors[(i - 1) % n] ? cnt = 1 : res += +(++cnt >= k);
    return res;
}
