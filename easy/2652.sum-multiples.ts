// https://leetcode.com/problems/sum-multiples/solutions/7237055/simplest/

function sumOfMultiples(n: number) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += +!(i % 3 && i % 5 && i % 7) && i;
        // res += +![3, 5, 7].every((j) => i % j) && i;
        // res += +[3, 5, 7].some((j) => !(i % j)) && i;
    }
    return res;
}
