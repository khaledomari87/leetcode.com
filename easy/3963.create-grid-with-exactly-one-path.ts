// https://leetcode.com/problems/create-grid-with-exactly-one-path/solutions/8354291/one-line/

// deno-fmt-ignore
const createGrid = (m: number, n: number) => Array.from({ length: m },
    (_, i) => (i ? '#' : '.').repeat(n - 1) + '.');
