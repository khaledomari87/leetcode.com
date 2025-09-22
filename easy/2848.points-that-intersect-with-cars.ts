// https://leetcode.com/problems/points-that-intersect-with-cars/solutions/7211243/simple-counting/

const numberOfPoints = (nums: [number, number][]) =>
    nums.reduce((arr, p) => {
        while (p[0] <= p[1]) arr[p[0]++] = true;
        return arr;
    }, new Array<boolean>(101))
        .reduce((res, bool) => res + +bool, 0);
