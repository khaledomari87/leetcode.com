// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/8346399/linear-solution/

function largestInteger(num: number) {
    const od: number[] = [], ev: number[] = [], party: number[] = [];
    while (num) {
        (num % 2 ? od : ev).push(num % 10);
        party.push(num % 2);
        num = Math.floor(num / 10);
    }
    od.sort(), ev.sort(), party.reverse();
    return +party.map((p) => (p ? od : ev).pop()!).join('');
}
