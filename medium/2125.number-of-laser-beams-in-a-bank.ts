// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/7304233/simplest/

function numberOfBeams(bank: string[]) {
    let res = 0, prev = 0;
    for (const floor of bank) {
        const curr = floor.replaceAll('0', '').length;
        res += prev * curr;
        prev = curr || prev;
    }
    return res;
}
