// https://leetcode.com/problems/implement-stack-using-queues/solutions/6270391/using-queuesimulator/

class QueueSimulator<T> {
    private arr: T[];
    constructor() {
        this.arr = new Array<T>();
    }
    get front(): T | undefined {
        return this.arr[0];
    }
    get size() {
        return this.arr.length;
    }
    push(n: T) {
        this.arr.push(n);
    }
    pop() {
        return this.arr.shift();
    }
}

class MyStack {
    private queue;
    constructor() {
        this.queue = new QueueSimulator<number>();
    }
    push(x: number): void {
        this.queue.push(x); // x is pushed last
        // We'll rotate the queue (len - 1) times to make x at front
        // remember queue pops from left and pushes to right
        for (let i = 1; i < this.queue.size; i++) {
            const front = this.queue.pop()!;
            this.queue.push(front);
        }
    }

    pop(): number | undefined {
        // since we reorder the queue with every push, the queue front is the stack top
        return this.queue.pop();
    }

    top(): number | undefined {
        // since we reorder the queue with every push, the queue front is the stack top
        return this.queue.front;
    }

    empty(): boolean {
        return this.queue.size === 0;
    }
}
