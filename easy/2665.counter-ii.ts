// https://leetcode.com/problems/counter-ii/solutions/7413167/clean/

function createCounter(init: number) {
    let counter = init;
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        reset: () => (counter = init),
    };
}
