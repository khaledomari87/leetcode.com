// https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/7654902/5-lines/

function findLatestTime(s: string) {
    const [hh, mm] = s.split(':').map((s) => s.split(''));
    if (hh[0] === '?') hh[0] = '01?'.includes(hh[1]) ? '1' : '0';
    if (hh[1] === '?') hh[1] = hh[0] === '1' ? '1' : '9';
    return [hh, ['5', '9'].map((v, i) => mm[i] === '?' ? v : mm[i])]
        .map((v) => v.join('')).join(':');
}
