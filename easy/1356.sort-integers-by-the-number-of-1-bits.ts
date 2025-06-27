// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/6893410/two-approaches-clean-ts-js/

function sortByBits(arr: number[]) {
    const max = arr.reduce((a, b) => Math.max(a, b), 0);
    const ones = new Array<number>(max + 1);
    arr.forEach((n) => ones[n] = n.toString(2).split('').reduce((a, b) => a + +b, 0));
    return arr.toSorted((a, b) => ones[a] - ones[b] || a - b);
}

function sortByBitsMap(arr: number[]) {
    const map = new Map(arr.map((n) => [n, n.toString(2).split('').reduce((a, b) => a + +b, 0)]));
    return arr.toSorted((a, b) => map.get(a)! - map.get(b)! || a - b);
}
