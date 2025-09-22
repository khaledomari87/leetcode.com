// https://leetcode.com/problems/fizz-buzz/solutions/6218344/one-line/

// deno-fmt-ignore
const fizzBuzz = (n: number) => Array.from({ length: n }, (_, i) =>
    'Fizz'.repeat(+!(++i % 3)) + 'Buzz'.repeat(+!(i % 5)) || `${i}`
);
