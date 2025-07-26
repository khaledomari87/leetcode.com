// https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5982840/simple-solution-using-set-30ms/

function longestSquareStreak(nums: number[]) {
    const set = new Set(nums), values = set.values();
    let output = -1, currentVal: undefined | number;
    while (output < 4 && (currentVal = values.next().value)) {
        let streak = 1;
        while (set.has(currentVal *= currentVal)) streak++;
        streak > 1 && (output = Math.max(output, streak));
    }
    return output;
}
