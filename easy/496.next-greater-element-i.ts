function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const stack: number[] = []; // Monotonic Stack
    nums2.forEach((val) => {
        while (stack.length && stack[stack.length - 1] < val) {
            map.set(stack.pop()!, val);
        }
        stack.push(val);
    });
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]) || -1;
    }
    return nums1;
}
