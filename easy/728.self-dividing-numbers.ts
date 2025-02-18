// https://leetcode.com/problems/self-dividing-numbers/solutions/6439070/clean-brute-force/

function selfDividingNumbers(left: number, right: number) {
    const res: number[] = [];
    for (let num = left; num <= right; num++) {
        num.toString().split('').every((dig) => num % +dig === 0) && res.push(num);
    }
    return res;
}
