// https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/7418416/double-counters/

function rearrangeCharacters(s: string, target: string) {
    const a = 'a'.charCodeAt(0), { min, floor } = Math;
    const [tCnt, sCnt] = [target, s].map((str) =>
        str.split('').reduce(
            (arr, c) => (arr[c.charCodeAt(0) - a]++, arr),
            new Array<number>(26).fill(0),
        )
    );
    return tCnt.map((v, i) => [v, i]).filter(([v]) => v).reduce(
        (res, [cnt, ch]) => min(res, floor(sCnt[ch] / cnt)),
        Infinity,
    );
}
