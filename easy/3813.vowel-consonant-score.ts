// https://leetcode.com/problems/vowel-consonant-score/solutions/7603553/counting-vowels-consonant/

function vowelConsonantScore(s: string) {
    let v = 0, c = 0;
    for (const char of s) {
        if ('aeiou'.includes(char)) v++;
        else if (char > '9') c++;
    }
    return c ? Math.floor(v / c) : 0;
}
