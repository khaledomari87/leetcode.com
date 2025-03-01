// https://leetcode.com/problems/unique-morse-code-words/solutions/6477652/hash-set/

function uniqueMorseRepresentations(words: string[]): number {
    const morseCodes = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ];
    const set = new Set<string>(), a = 'a'.charCodeAt(0);
    for (const word of words) {
        const code = new Array<string>(word.length);
        for (let i = 0; i < word.length; i++) {
            code[i] = morseCodes[word.charCodeAt(i) - a];
        }
        set.add(code.join(''));
    }
    return set.size;
}
