// https://leetcode.com/problems/letter-tile-possibilities/solutions/6431754/recursive-backtracking/

function numTilePossibilities(tiles: string): number {
    const backtrack = (): number => {
        let res = 0;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > 0) {
                counts[i]--;
                res += 1 + backtrack();
                counts[i]++;
            }
        }
        return res;
    };
    const counts = new Array<number>(26).fill(0);
    for (let i = 0, A = 'A'.charCodeAt(0); i < tiles.length; i++) {
        counts[tiles.charCodeAt(i) - A]++;
    }
    return backtrack();
}
