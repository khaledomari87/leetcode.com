// https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/7420482/strings/

// deno-fmt-ignore
function smallestNumber(n: number, t: number) {
    const prd = (m: number) => `${m}`.split('')
        .reduce((a, b) => a * +b, 1);
    while (prd(n) % t) n++;
    return n;
}
