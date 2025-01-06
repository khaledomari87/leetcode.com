// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/6237159/optimum-solution-sum-of-left-and-right-moves/

function minOperations(boxes: string): number[] {
    const res = new Array<number>(boxes.length);
    for (let L = 0, ballsL = 0, movesL = 0, ballsR = 0, movesR = 0; L < boxes.length; L++) {
        res[L] = (res[L] || 0) + movesL;
        movesL += ballsL += +boxes[L];

        const R = boxes.length - L - 1;
        res[R] = (res[R] || 0) + movesR;
        movesR += ballsR += +boxes[R];
    }
    return res;
}
