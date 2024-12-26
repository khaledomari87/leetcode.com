// https://leetcode.com/problems/excel-sheet-column-title/solutions/6188284/cannot-be-faster-base-26-log-0ms/

function convertToTitle(num: number): string {
    const A = 'A'.charCodeAt(0), aphabets = 26;
    let output = '';
    while (num-- > 0) {
        output = String.fromCharCode((num % aphabets) + A) + output;
        num = Math.floor(num / aphabets);
    }
    return output;
}
