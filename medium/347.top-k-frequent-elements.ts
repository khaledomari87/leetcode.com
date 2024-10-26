// https://leetcode.com/problems/top-k-frequent-elements/

import { Heap } from '../assets/heap.ts';

// Time: O(n), Space: O(n)
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>(); // number => count
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const arr = new Array<number[]>(nums.length);
    map.forEach((count, num) => {
        const idx = count - 1;
        !arr[idx] && (arr[idx] = []);
        arr[idx].push(num);
    });

    const output = new Array<number>();
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i]) {
            output.push(...arr[i]);
            if (output.length >= k) break;
        }
    }
    return output;
}

// Time: O(n log k), Space: O(n): O(Map + heap) => O(n + k) = O(n), since k <= n
function topKFrequent2(nums: number[], k: number): number[] {
    const map = new Map<number, number>(); // number => count
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const minHeap = new Heap<{ num: number; count: number }>((a, b) => a.count - b.count);
    map.forEach((count, num) => {
        minHeap.enqueue({ num, count });
        if (minHeap.size > k) {
            minHeap.dequeue();
        }
    });
    return minHeap.toArray().map((v) => v.num);
}
