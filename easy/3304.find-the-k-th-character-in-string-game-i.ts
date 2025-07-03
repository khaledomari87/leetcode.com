// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/6913025/two-approaches/

function kthCharacter(k: number) {
    const res = [0];
    while (k > res.length) {
        for (let i = 0, n = res.length; i < n; i++) {
            res.push((res[i] + 1) % 26);
        }
    }
    return String.fromCharCode(res[k - 1] + 'a'.charCodeAt(0));
}

// deno-fmt-ignore
const kthCharacter2 = (k: number) => (
    'abbcbccdbccdcddebccdcddecddedeefbccdcddecddedeefcdded' +
    'eefdeefeffgbccdcddecddedeefcddedeefdeefeffgcddedeefde' +
    'efeffgdeefeffgeffgfgghbccdcddecddedeefcddedeefdeefeff' +
    'gcddedeefdeefeffgdeefeffgeffgfgghcddedeefdeefeffgdeef' +
    'effgeffgfgghdeefeffgeffgfggheffgfgghfgghghhibccdcddec' +
    'ddedeefcddedeefdeefeffgcddedeefdeefeffgdeefeffgeffgfg' +
    'ghcddedeefdeefeffgdeefeffgeffgfgghdeefeffgeffgfggheff' +
    'gfgghfgghghhicddedeefdeefeffgdeefeffgeffgfgghdeefeffg' +
    'effgfggheffgfgghfgghghhideefeffgeffgfggheffgfgghfgghg' +
    'hhieffgfgghfgghghhifgghghhighhihiij')[k - 1];
