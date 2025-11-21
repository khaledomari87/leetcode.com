// https://leetcode.com/problems/maximum-units-on-a-truck/solutions/7364613/sorting/

function maximumUnits(boxTypes: [number, number][], truckSize: number) {
    let res = 0;
    for (const box of boxTypes.sort((a, b) => b[1] - a[1])) {
        const count = Math.min(truckSize, box[0]);
        res += box[1] * count, truckSize -= count;
        if (!truckSize) break;
    }
    return res;
}
