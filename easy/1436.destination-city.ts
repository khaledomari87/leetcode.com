// https://leetcode.com/problems/destination-city/solutions/6948920/two-lines-optimal-solution/

function destCity(paths: string[][]) {
    const sources = new Set(paths.map(([from]) => from));
    return paths.find(([, to]) => !sources.has(to))![1];
}
