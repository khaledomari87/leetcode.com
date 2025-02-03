// https://leetcode.com/problems/robot-return-to-origin/solutions/6369783/simulation/

function judgeCircle(moves: string) {
    let x = 0, y = 0;
    for (const char of moves) char === 'L' ? x++ : char === 'R' ? x-- : char === 'U' ? y++ : y--;
    return x === y && x === 0;
}
