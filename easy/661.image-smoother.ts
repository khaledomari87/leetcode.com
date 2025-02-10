// https://leetcode.com/problems/image-smoother/solutions/6399296/simulation/

function imageSmoother(img: number[][]): number[][] {
    const m = img.length, n = img[0].length;
    const res = Array.from({ length: m }, () => new Array<number>(n));
    img.forEach((row, r) =>
        row.forEach((_, c) => {
            let sum = 0, count = 0;
            for (let i = r - 1; i <= r + 1; i++) {
                for (let j = c - 1; j <= c + 1; j++) {
                    if (i >= 0 && i < m && j >= 0 && j < n) {
                        sum += img[i][j];
                        count++;
                    }
                }
            }
            res[r][c] = Math.floor(sum / count);
        })
    );
    return res;
}
