// https://leetcode.com/problems/add-two-promises/solutions/7528887/one-line/

const addTwoPromises = async (p1: Promise<number>, p2: typeof p1) => (await p1) + (await p2);

const addTwoPromisesConcurrent = async (p1: Promise<number>, p2: typeof p1) =>
    (await Promise.all([p1, p2])).reduce((a, b) => a + b);
