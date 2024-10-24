// https://leetcode.com/problems/last-stone-weight/

import { MaxPriorityQueue, type PriorityQueueItem } from '@datastructures-js/priority-queue';

function lastStoneWeight(stones: number[]): number {
    const queue = new MaxPriorityQueue<number>();
    stones.forEach((s) => queue.enqueue(s));
    while (queue.size() > 1) {
        const diff = (queue.dequeue() as PriorityQueueItem<number>).element -
            (queue.dequeue() as PriorityQueueItem<number>).element;
        diff && queue.enqueue(diff);
    }
    return (queue.front() as PriorityQueueItem<number>)?.element || 0;
}

