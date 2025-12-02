// https://leetcode.com/problems/sentence-similarity-iii/solutions/7387276/two-pointers/

function areSentencesSimilar(sentence1: string, sentence2: string) {
    const [small, big] = [sentence1, sentence2]
        .map((s) => s.split(' '))
        .sort((a, b) => a.length - b.length);
    for (let L = 0, R = -1; L < small.length + R + 1;) {
        if (small[L] === big[L]) L++;
        else if (small.at(R) === big.at(R)) R--;
        else return false;
    }
    return true;
}
