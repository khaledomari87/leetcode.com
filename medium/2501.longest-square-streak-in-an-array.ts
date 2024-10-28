// https://leetcode.com/problems/longest-square-streak-in-an-array/

function longestSquareStreak(nums: number[]): number {
    const set = new Set(nums), values = set.values();
    let output = -1, currentVal: undefined | number;
    while ((currentVal = values.next().value)) {
        let streak = 0;
        do {
            streak++;
            set.delete(currentVal);
            let prevVal = Math.sqrt(currentVal);
            while (set.has(prevVal)) {
                set.delete(prevVal);
                prevVal = Math.sqrt(prevVal);
                streak++;
            }
            currentVal *= currentVal;
        } while (set.has(currentVal));
        streak > 1 && (output = Math.max(output, streak));
    }
    return output;
}
