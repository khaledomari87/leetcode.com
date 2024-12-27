// https://leetcode.com/problems/best-sightseeing-pair/solutions/6192557/linear-solution-dynamic-programming/

function maxScoreSightseeingPair(values: number[]): number {
    let output = 0;
    for (let i = 1, prev = values[0] - 1; i < values.length; i++) {
        output = Math.max(output, values[i] + prev);
        prev = Math.max(prev - 1, values[i] - 1);
    }
    return output;
}
