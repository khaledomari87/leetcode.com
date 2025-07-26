// https://leetcode.com/problems/permutations/solutions/5987395/o-n-recursive-backtracking/

function permute(nums: number[]): number[][] {
    const output = new Array<number[]>();
    const track = new Array<number>();
    const recursiveBT = () => {
        if (track.length === nums.length) {
            output.push([...track]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!track.includes(nums[i])) {
                track.push(nums[i]);
                recursiveBT();
                track.pop();
            }
        }
    };
    recursiveBT();
    return output;
}
