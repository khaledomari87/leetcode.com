// https://leetcode.com/problems/maximum-product-of-two-digits/solutions/7422822/two-approaches-sorting-iterative/

const maxProduct = (n: number) =>
    `${n}`.split('')
        .map((d) => +d)
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reduce((a, b) => a * b);

function maxProduct2(n: number) {
    let a = 0, b = 0;
    for (const d of `${n}`) {
        const num = +d;
        if (num >= a) b = a, a = num;
        else if (num > b) b = num;
    }
    return a * b;
}
