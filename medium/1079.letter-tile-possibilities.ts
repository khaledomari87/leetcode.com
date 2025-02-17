// https://leetcode.com/problems/letter-tile-possibilities/solutions/6431754/recursive-backtracking/

function numTilePossibilities(tiles: string): number {
    const backtrack = (): number => {
        return counts.reduce((res, count, i) => {
            if (count > 0) {
                counts[i]--;
                res += 1 + backtrack();
                counts[i]++;
            }
            return res;
        }, 0);
    };
    const counts = new Array<number>(26).fill(0);
    for (let i = 0, A = 'A'.charCodeAt(0); i < tiles.length; i++) {
        counts[tiles.charCodeAt(i) - A]++;
    }
    return backtrack();
}
