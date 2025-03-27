function minimumIndex(nums: number[]) {
    let x = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        count += nums[i] === x ? 1 : -1;
        if (count === 0) {
            x = nums[i];
            count = 1;
        }
    }
    count = nums.reduce((res, num) => res + +(num === x), 0);
    if (count <= Math.ceil(nums.length / 2)) return -1;

    for (let i = 0, L = 0; i < nums.length; i++) {
        const R = count - (L += +(nums[i] === x));
        if (L * 2 > i + 1 && R * 2 > nums.length - i - 1) {
            return i;
        }
    }
    return -1; // We'd never get here
}
