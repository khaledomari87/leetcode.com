// https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/7435101/sorting-greedy/

function minimumBoxes(apple: number[], capacity: number[]) {
    let res = 0, apples = apple.reduce((a, b) => a + b);
    for (const c of capacity.sort((a, b) => b - a)) {
        res++, apples -= c;
        if (apples <= 0) return res;
    }
    throw new Error('Invalid Input!');
}
