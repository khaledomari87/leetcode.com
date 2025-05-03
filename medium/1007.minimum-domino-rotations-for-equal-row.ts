// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/6711274/greedy/

function minDominoRotations(tops: number[], bottoms: number[]) {
    const check = (tar: number) => {
        let tFlips = 0, bFlips = 0;
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== tar && bottoms[i] !== tar) return -1;
            tFlips += +(tops[i] !== tar);
            bFlips += +(bottoms[i] !== tar);
        }
        return Math.min(tFlips, bFlips);
    };
    const result = check(tops[0]);
    if (result > -1) return result;
    return tops[0] !== bottoms[0] ? check(bottoms[0]) : -1;
}
