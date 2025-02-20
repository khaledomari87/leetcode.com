// https://leetcode.com/problems/flood-fill/solutions/6447285/dfs-backtracking/

function floodFill(img: number[][], sr: number, sc: number, color: number) {
    const orig = img[sr][sc];
    const dfs = (r: number, c: number) => {
        if (r >= 0 && c >= 0 && r < img.length && c < img[0].length && img[r][c] === orig) {
            img[r][c] = color;
            [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach((d) => dfs(r + d[0], c + d[1]));
        }
    };
    if (img[sr][sc] !== color) dfs(sr, sc);
    return img;
}
