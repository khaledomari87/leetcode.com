// https://leetcode.com/problems/sort-integers-by-binary-reflection/solutions/7555256/two-approaches-string-math/

function sortByReflection(nums: number[]) {
    const ref = new Map(nums.map((n) => [n, reflectMath(n)]));
    // const ref = new Map(nums.map((n) => [n, reflectStr(n)]));
    return nums.sort((a, b) => ref.get(a)! - ref.get(b)! || a - b);
}
function reflectMath(n: number) {
    let rev = 0;
    while (n) {
        rev = (rev << 1) + (n % 2);
        n >>= 1;
    }
    return rev;
}
function reflectStr(n: number) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}
