// https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/6921293/clean-ts-js/
// deno-fmt-ignore-file

const findLucky = (arr: number[]) => arr
    .reduce(
        (map, num) => (map[num] = (map[num] || 0) + 1, map),
        new Array<number>(501),
    )
    .filter((num, i) => num === i)
    .reduce((res, num) => Math.max(res, num), -1);

const findLuckyMap = (arr: number[]) => Array.from(
        arr.reduce(
            (map, num) => map.set(num, (map.get(num) || 0) + 1),
            new Map<number, number>(),
        ).entries(),
    )
    .filter((item) => item[0] === item[1])
    .reduce((res, num) => Math.max(res, num[0]), -1);
