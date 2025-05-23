export class Heap<T> {
    private heap: T[];
    private comparator: (a: T, b: T) => number;
    /**
     * Construct a new Heap with the given comparator.
     * @param comparator - The comparator to use when ordering values in the heap.
     * For MinHeap use (a, b) => a - b, for MaxHeap use (a, b) => b - a
     */
    constructor(comparator: (a: T, b: T) => number, arr: T[] = []) {
        this.comparator = comparator;
        Heap.heapify(this.heap = arr, this.comparator);
    }
    get size() {
        return this.heap.length;
    }
    private bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (this.comparator(element, parent) >= 0) break;
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
                if (this.comparator(leftChild, element) < 0) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (!swap && this.comparator(rightChild, element) < 0) ||
                    (swap && this.comparator(rightChild, leftChild!) < 0)
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
    enqueue(val: T) {
        this.heap.push(val);
        this.bubbleUp();
    }
    dequeue(): T | undefined {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end!;
            this.bubbleDown();
        }
        return max;
    }
    front(): T | undefined {
        return this.heap[0];
    }
    toArray() {
        return this.heap;
    }
    static heapify<T>(arr: T[], comparator: (a: T, b: T) => number) {
        const siftDown = (index: number) => {
            const length = arr.length;
            while (true) {
                const leftChildIdx = 2 * index + 1;
                const rightChildIdx = 2 * index + 2;
                let smallest = index;
                if (leftChildIdx < length && comparator(arr[leftChildIdx], arr[smallest]) < 0) {
                    smallest = leftChildIdx;
                }
                if (rightChildIdx < length && comparator(arr[rightChildIdx], arr[smallest]) < 0) {
                    smallest = rightChildIdx;
                }
                if (smallest === index) break;
                [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
                index = smallest;
            }
        };
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) siftDown(i);
    }
}
