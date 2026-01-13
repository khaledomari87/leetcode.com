// https://leetcode.com/problems/generate-fibonacci-sequence/solutions/7490110/clean/

function* fibGenerator(): Generator<number, number, number> {
    for (let a = 1, b = 0; true; [a, b] = [b, a + b]) yield b;
}
