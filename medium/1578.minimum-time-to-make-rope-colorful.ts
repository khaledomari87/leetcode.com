// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/7323239/constant-space/

function minCost(colors: string, neededTime: number[]) {
    const max = Math.max, n = colors.length;
    let res = 0;
    for (let l = 0, r = 1; r < n; l = r++) {
        while (r < n && colors[l] === colors[r]) r++;
        let maxx = 0;
        for (let i = l; i < r; i++) {
            res += neededTime[i];
            maxx = max(maxx, neededTime[i]);
        }
        res -= maxx;
    }
    return res;
}
