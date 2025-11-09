// https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/7336202/two-approaches-iterator-recursion/

const { min, max, floor } = Math;

function countOperations(num1: number, num2: number) {
    let res = 0;
    while (num1 && num2) {
        const low = min(num1, num2);
        const high = max(num1, num2);
        res += floor(high / low);
        num1 = high % low, num2 = low;
    }
    return res;
}

function countOperations2(num1: number, num2: number): number {
    if (!num1 || !num2) return 0;
    const low = min(num1, num2);
    const high = max(num1, num2);
    return floor(high / low) + countOperations2(high % low, low);
}
