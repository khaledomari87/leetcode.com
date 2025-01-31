// https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/6353553/hash-map-and-sort/

function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = list1.reduce((map, str, i) => map.set(str, i), new Map<string, number>());
    const common = list2.reduce((arr, str, j) => {
        const i = map.get(str);
        i !== undefined && arr.push([str, i + j]);
        return arr;
    }, [] as [string, number][]);
    common.sort((a, b) => a[1] - b[1]);
    return common.filter((val) => val[1] === common[0][1]).map((a) => a[0]);
}
