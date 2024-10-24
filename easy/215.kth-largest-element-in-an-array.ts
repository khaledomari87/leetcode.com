// https://leetcode.com/problems/kth-largest-element-in-an-array/

class MinHeap<T> {
    private heap: T[] = [];
    enqueue(val: T) {
        this.heap.push(val);
        this.bubbleUp();
    }
    dequeue() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end!;
            this.bubbleDown();
        }
        return { element: max };
    }
    front() {
        return { element: this.heap[0] };
    }
    private bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    private bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild!)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

const findKthLargest = function (nums: number[], k: number) {
    // leetcode MinPriorityQueue is slow for some reason!
    const queue = new MinHeap<number>();
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            queue.enqueue(nums[i]);
        } else if (nums[i] > queue.front().element) {
            queue.dequeue();
            queue.enqueue(nums[i]);
        }
    }
    return queue.front().element;
};

function findKthLargest2(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
}
