// https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/7437724/two-lines-two-approaches/

import { PriorityQueue } from 'npm:@datastructures-js/priority-queue';

const maximumHappinessSum = (happiness: number[], k: number) =>
    happiness.sort((a, b) => b - a).slice(0, k)
        .reduce((res, h, i) => res + Math.max(0, h - i), 0);

function maximumHappinessSumPQ(happiness: number[], k: number) {
    const maxPQ = new PriorityQueue((a, b) => b - a, happiness);
    let res = 0;
    for (let i = 0, max = Math.max; i < k; i++) {
        res += max(0, maxPQ.dequeue() - i);
    }
    return res;
}
