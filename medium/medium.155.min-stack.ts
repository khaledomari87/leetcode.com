// https://leetcode.com/problems/min-stack/

class MinStack {
    constructor(private stack: number[], private minStack: number[]) {
        this.stack = [];
        this.minStack = [];
    }
    push(val: number): void {
        this.stack.push(val);
        const lastIndex = this.minStack.length - 1;
        if (lastIndex < 0 || val <= this.minStack[lastIndex]) {
            this.minStack.push(val);
        }
    }
    pop(): void {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
