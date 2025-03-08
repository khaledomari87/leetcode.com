// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/6512333/sliding-window/

function minimumRecolors(blocks: string, k: number): number {
    let res = Number.POSITIVE_INFINITY;
    for (let L = 0, R = 0, whites = 0; R < blocks.length; R++) {
        whites += +(blocks[R] === 'W');
        if (R - L + 1 === k) {
            res = Math.min(res, whites);
            whites -= +(blocks[L++] === 'W');
        }
    }
    return res;
}
