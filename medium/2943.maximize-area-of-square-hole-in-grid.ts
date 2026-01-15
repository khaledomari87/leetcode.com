// https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/7496382/sorting-two-pointers-explained/

const maximizeSquareHoleArea = (n: number, m: number, hBars: number[], vBars: number[]) =>
    ([hBars, vBars].map((v) => v.sort((a, b) => a - b)).map((bars) => {
        let cnt = +(bars.length === 1);
        for (let l = 0, r = 1; r < bars.length; r++) {
            if (bars[r] - bars[r - 1] !== 1) l = r;
            cnt = Math.max(cnt, r - l + 1);
        }
        return cnt;
    }).reduce((a, b) => Math.min(a, b)) + 1) ** 2;
