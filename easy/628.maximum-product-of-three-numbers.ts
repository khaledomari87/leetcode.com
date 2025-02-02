// https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/6362438/single-traversal/

function maximumProduct(nums: number[]) {
    const L = new Array<number>(3).fill(Number.NEGATIVE_INFINITY); // Largest
    const S = new Array<number>(2).fill(Number.POSITIVE_INFINITY); // Smallest
    nums.forEach((num) => {
        if (num > L[0]) L.unshift(num) && L.pop();
        else if (num > L[1]) [L[1], L[2]] = [num, L[1]];
        else if (num > L[2]) L[2] = num;

        if (num < S[0]) S.unshift(num) && S.pop();
        else if (num < S[1]) S[1] = num;
    });
    return Math.max(L.reduce((a, b) => a * b), L[0] * S.reduce((a, b) => a * b));
}
