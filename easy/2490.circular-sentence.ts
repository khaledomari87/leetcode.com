// https://leetcode.com/problems/circular-sentence/solutions/6186571/optimum-solution-without-splitting/

function isCircularSentence(s: string): boolean {
    if (s[0] !== s[s.length - 1]) return false;
    const words = s.split(' ');
    for (let i = 1; i < words.length; i++) {
        if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
            return false;
        }
    }
    return true;
}
