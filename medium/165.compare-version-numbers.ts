// https://leetcode.com/problems/compare-version-numbers/solutions/7216555/clean-solution/

function compareVersion(v1: string, v2: string) {
    const [revs1, revs2] = [v1, v2].map((v) => v.split('.').map((d) => +d));
    const { sign, max } = Math, len = max(revs1.length, revs2.length);

    [revs1, revs2].forEach((d) => {
        if (d.length < len) d.push(...new Array(len - d.length).fill(0));
    });

    const index = revs1.findIndex((d, i) => d !== revs2[i]);
    return index > -1 ? sign(revs1[index] - revs2[index]) : 0;
}
