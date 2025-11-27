// https://leetcode.com/problems/snake-in-matrix/solutions/7377956/clean/

function finalPositionOfSnake(n: number, commands: string[]) {
    let i = 0, j = 0;
    for (const c of commands) {
        i += +(c === 'DOWN') - +(c === 'UP');
        j += +(c === 'RIGHT') - +(c === 'LEFT');
    }
    return (i * n) + j;
}
