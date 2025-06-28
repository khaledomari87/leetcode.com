// deno-fmt-ignore-file

// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/6893810/one-line-sort-min-heap-approaches/
import { PriorityQueue } from 'npm:@datastructures-js/priority-queue';

const maxSubsequence = (nums: number[], k: number) =>
    nums.map((n, i) => [n, i])       // map [value, index]
        .sort((a, b) => a[0] - b[0]) // sort by values
        .slice(-k)                   // last k elements
        .sort((a, b) => a[1] - b[1]) // sort by index
        .map((v) => v[0]);           // only values

function maxSubsequenceHeap(nums: number[], k: number) {
    const minHeap = nums.reduce(
        (h, n, i) => (h.enqueue([n, i]) && h.size() > k && h.dequeue(), h),
        new PriorityQueue<[number, number]>((a, b) => a[0] - b[0]),
    );
    return minHeap.toArray().sort((a, b) => a[1] - b[1]).map((v) => v[0]);
}
