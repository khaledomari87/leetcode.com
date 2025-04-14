// https://leetcode.com/problems/count-good-triplets/solutions/6648594/o-n-3/

const countGoodTriplets = (arr: number[], a: number, b: number, c: number) =>
    arr.reduce((res, numi, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                res += +(
                    Math.abs(numi - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(numi - arr[k]) <= c
                );
            }
        }
        return res;
    }, 0);
