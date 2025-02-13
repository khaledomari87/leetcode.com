// https://leetcode.com/problems/design-a-number-container-system/solutions/6391919/min-heap/

import { Heap } from '../assets/Heap.ts';

class NumberContainers {
    private numberToIndices = new Map<number, Heap<number>>();
    private indexToNumber = new Map<number, number>();

    change(index: number, number: number): void {
        const prevNumber = this.indexToNumber.get(index);
        prevNumber !== undefined && this.numberToIndices.get(prevNumber)?.enqueue(index);
        this.indexToNumber.set(index, number);

        let heap = this.numberToIndices.get(number);
        if (heap === undefined) this.numberToIndices.set(number, heap = new Heap((a, b) => a - b));
        heap.enqueue(index);
    }

    find(number: number): number {
        const heap = this.numberToIndices.get(number);
        if (heap?.size) {
            while (heap.size) {
                if (this.indexToNumber.get(heap.front()!) === number) return heap.front()!;
                heap.dequeue();
            }
        }
        return -1;
    }
}
