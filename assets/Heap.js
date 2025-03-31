class Heap {
    constructor(comparator, arr = []) {
        this.heap = [];
        this.comparator = comparator;
        Heap.heapify(this.heap = arr, this.comparator);
    }
    get size() {
        return this.heap.length;
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2), parent = this.heap[parentIdx];
            if (this.comparator(element, parent) >= 0) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let idx = 0;
        const length = this.heap.length, element = this.heap[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1, rightChildIdx = 2 * idx + 2;
            let swap = null;
            if (leftChildIdx < length && this.comparator(this.heap[leftChildIdx], element) < 0) {
                swap = leftChildIdx;
            }
            if (
                rightChildIdx < length &&
                ((swap === null && this.comparator(this.heap[rightChildIdx], element) < 0) ||
                    (swap !== null && this.comparator(this.heap[rightChildIdx], this.heap[leftChildIdx]) < 0))
            ) swap = rightChildIdx;
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
    enqueue(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    dequeue() {
        const max = this.heap[0], end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    front() {
        return this.heap[0];
    }
    toArray() {
        return this.heap;
    }
    static heapify(arr, comparator) {
        const siftDown = (index) => {
            const length = arr.length;
            while (true) {
                const leftChildIdx = 2 * index + 1, rightChildIdx = 2 * index + 2;
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
