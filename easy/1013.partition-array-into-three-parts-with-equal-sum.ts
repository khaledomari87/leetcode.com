// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/6793917/linear-solution/

function canThreePartsEqualSum(arr: number[]) {
    const n = arr.length, total = arr.reduce((a, b) => a + b);
    if (total % 3 > 0) return false;
    for (let i = 0, j = 0, target = total / 3; j < 3; j++) {
        let sum = arr[i++];
        while (i < n && (sum !== target || j === 2)) sum += arr[i++];
        if (j === 2) return sum === target;
        if (i === n) return false;
    }
    return true;
}
