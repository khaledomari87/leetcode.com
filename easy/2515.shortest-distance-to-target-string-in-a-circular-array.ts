// https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/7918446/two-pointers/

function closestTarget(words: string[], target: string, start: number) {
    for (let i = 0, n = words.length, half = n >> 1; i < half;) {
        if (words.at((start + i) % n)! === target) return i;
        if (words.at(start - i++ - 1)! === target) return i;
    }
    return -1;
}
