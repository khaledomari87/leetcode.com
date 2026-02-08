// https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/7563231/simple-simulation/

const maxHeightOfTriangle = (red: number, blue: number) =>
    [[red, blue], [blue, red]].map((balls) => {
        let i = 1;
        while (balls[i % 2] - i >= 0) balls[i % 2] -= i++;
        return i - 1;
    }).reduce((a, b) => Math.max(a, b));
