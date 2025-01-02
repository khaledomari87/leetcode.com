// https://leetcode.com/problems/fizz-buzz/solutions/6218344/simple/

function fizzBuzz(n: number): string[] {
    const output = new Array<string>(n);
    for (let i = 1; i <= n; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) output[i - 1] = i.toString();
        else output[i - 1] = `${i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}`;
    }
    return output;
}
