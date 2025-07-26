// https://leetcode.com/problems/summary-ranges/solutions/5891855/efficient-and-readable/

function summaryRanges(nums: number[]): string[] {
    const result = new Array<string>();
    const length = nums.length;

    let start: number | undefined = nums[0];
    for (let i = 1; i < length + 1; i++) {
        if (nums[i] - nums[i - 1] > 1 || i === length) {
            result.push(
                start !== nums[i - 1] ? `${start}->${nums[i - 1]}` : `${start}`,
            );
            start = nums[i]; // the last iteration in the loop will set it to undefined
        }
    }
    return result;
}
