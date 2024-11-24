// https://leetcode.com/problems/rotating-the-box/solutions/6079025/short-and-optimum-solution-o-m-n/

const S = '#', O = '*', E = '.'; // Stone, Obstacle, Empty
function rotateTheBox(box: (typeof S | typeof O | typeof E)[][]): typeof box {
    const m = box.length, n = box[0].length;
    const output: typeof box = new Array(n);
    for (let i = 0; i < n; i++) output[i] = new Array(m);

    for (let iBox = 0; iBox < m; iBox++) {
        for (let jBox = n - 1; jBox >= 0; jBox--) {
            let stoneCount = 0;
            let obstacleIndex = jBox;
            while (obstacleIndex >= 0 && box[iBox][obstacleIndex] !== O) {
                box[iBox][obstacleIndex--] === S && stoneCount++;
            }
            obstacleIndex >= 0 && (output[obstacleIndex][m - iBox - 1] = O);
            for (let index = jBox; index > obstacleIndex; index--) {
                output[index][m - iBox - 1] = stoneCount-- > 0 ? S : E;
            }
            jBox = obstacleIndex;
        }
    }
    return output;
}
