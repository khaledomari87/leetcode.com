// https://leetcode.com/problems/find-unique-binary-string/solutions/6444903/one-line-linear-solution/

const findDifferentBinaryString = (nums: string[]) =>
    nums.reduce((res, bin, idx) => `${res}${+!+bin[idx]}`, '');

const findDifferentBinaryStringRandom = (nums: string[]): string => {
    const set = new Set(nums.map((bin) => Number.parseInt(bin, 2)));
    let rand = 0;
    while (set.has(rand)) rand = Math.floor(Math.random() * (2 ** nums.length));
    return rand.toString(2).padStart(nums.length, '0');
};

function findDifferentBinaryStringSet(nums: string[]) {
    const s = new Set(nums.map((v) => parseInt(v, 2)));
    for (let i = 0; true; i++) {
        if (!s.has(i)) {
            return i.toString(2).padStart(nums.length, '0');
        }
    }
}
