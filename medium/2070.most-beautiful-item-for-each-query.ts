// https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6036311/sorting-items-and-queries-n-log-n-m-log-m/

// Time complexity: O(n∗log(n)+m∗log(m))
// Space complexity: O(n+m)
function maximumBeauty(items: [number, number][], queries: number[]): number[] {
    items.sort((a, b) => a[0] - b[0]);
    const qSorted = queries.map((price, index) => ({ price, index })).sort((a, b) => a.price - b.price);

    const output = new Array<number>(queries.length);
    const track = { beauty: 0, index: 0 };
    for (const query of qSorted) {
        while (items[track.index]?.[0] <= query.price) {
            track.beauty = Math.max(track.beauty, items[track.index++][1]);
        }
        output[query.index] = track.beauty;
    }
    return output;
}

// Time complexity: O((m + n) * log(n))
// Space complexity: O(n)
function maximumBeautyBinarySearch(items: [number, number][], queries: number[]): number[] {
    const newItems = new Array<number[]>();
    let max = 0;
    for (const item of items.sort((a, b) => a[0] - b[0])) {
        if (item[1] > max) { // Remove useless items have price higher but beauty smaller
            newItems.push(item);
            max = item[1];
        }
    }
    queries.forEach((price, index) => {
        let left = 0, right = newItems.length - 1;
        queries[index] = 0;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (newItems[mid][0] > price) {
                right = mid - 1;
            } else {
                queries[index] = newItems[mid][1];
                left = mid + 1;
            }
        }
    });
    return queries;
}
