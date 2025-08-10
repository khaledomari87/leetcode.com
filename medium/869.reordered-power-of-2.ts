// https://leetcode.com/problems/reordered-power-of-2/solutions/7063519/clean-solution/

function reorderedPowerOf2(n: number) {
    for (
        let nStr = String(n).split('').sort().join(''), iStr = '', cand = 1;
        iStr.length <= nStr.length;
        cand *= 2
    ) {
        iStr = String(cand).split('').sort().join('');
        if (iStr === nStr) return true;
    }
    return false;
}
