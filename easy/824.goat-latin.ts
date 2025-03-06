// https://leetcode.com/problems/goat-latin/solutions/6506179/simulation/

function toGoatLatin(sentence: string) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return sentence.split(' ').map((w, i) => {
        const conso = !vowels.has(w[0]);
        return w.substring(+conso) + w[0].repeat(+conso) + 'ma' + 'a'.repeat(i + 1);
    }).join(' ');
}
