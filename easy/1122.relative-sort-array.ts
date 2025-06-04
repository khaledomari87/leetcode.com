// https://leetcode.com/problems/relative-sort-array/solutions/6811646/clean-ts-js/

function relativeSortArray(A: number[], B: number[]) {
    const order = new Map(B.map((n, i) => [n, i]));
    const offset = B.length;
    return A.toSorted((a, b) =>
        (order.get(a) ?? a + offset) -
        (order.get(b) ?? b + offset)
    );
}
