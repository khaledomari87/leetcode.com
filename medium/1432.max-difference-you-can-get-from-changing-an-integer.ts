// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/6844579/clean-elegant/

function maxDiff(n: number) {
    const str = n.toString(), arr = str.split('');

    const minDig = arr.find((d) => !'01'.includes(d));
    const minNum = minDig ? +str.replaceAll(minDig, arr[0] === '1' ? '0' : '1') : n;

    const maxDig = arr.find((d) => d !== '9');
    const maxNum = maxDig ? +str.replaceAll(maxDig, '9') : n;

    return maxNum - minNum;
}
