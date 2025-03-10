// https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/6519407/sliding-window/
function countOfSubstrings(word: string, k: number) {
    const atLeastK = (k: number) => {
        let res = 0;
        const vowels = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
        for (let L = 0, R = 0, consonants = 0; R < word.length; R++) {
            const itemR = vowels.get(word[R]);
            itemR !== undefined ? vowels.set(word[R], itemR + 1) : consonants += 1;
            while (Array.from(vowels.values()).every((c) => c > 0) && consonants >= k) {
                res += word.length - R;
                const vowelCountL = vowels.get(word[L]);
                vowelCountL !== undefined ? vowels.set(word[L], vowelCountL - 1) : consonants--;
                L++;
            }
        }
        return res;
    };
    return atLeastK(k) - atLeastK(k + 1);
}
