// https://leetcode.com/problems/subsets/solutions/5975466/efficient-solution-using-backtracking/

function subsets(nums: number[]): number[][] {
    const output = new Array<number[]>();
    const track = new Array<number>();
    const recur = (index: number) => {
        if (index === nums.length) {
            output.push([...track]);
            return;
        }
        recur(index + 1);
        track.push(nums[index]);
        recur(index + 1);
        track.pop();
    };
    recur(0);
    return output;
}
