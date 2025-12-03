// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/7389274/short-greedy-solution/

// deno-fmt-ignore
function convertTime(current: string, correct: string) {
    const [[currH, currM], [corrH, corrM]] = [current, correct]
        .map((t) => t.split(':').map(Number)), floor = Math.floor;
    return [60, 15, 5, 1].reduce(
        ([res, diff], v) => [res + floor(diff / v), diff % v],
        [0, corrH * 60 + corrM - currH * 60 - currM],
    )[0];
}
