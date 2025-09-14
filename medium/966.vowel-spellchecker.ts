// https://leetcode.com/problems/vowel-spellchecker/solutions/7188453/clean-solution/

function spellchecker(wordlist: string[], queries: string[]) {
    const dev = (s: string) => s.toLowerCase().replace(/[aeiou]/g, '*');
    const original = new Set<string>(wordlist);
    const lowerCase: Map<string, number> = wordlist.reduceRight(
        (m, w, i) => m.set(w.toLowerCase(), i),
        new Map(),
    );
    const vowelless: typeof lowerCase = wordlist.reduceRight(
        (m, w, i) => m.set(dev(w), i),
        new Map(),
    );
    return queries.map((q) => {
        if (original.has(q)) return q;
        let index = lowerCase.get(q.toLowerCase());
        if (index !== undefined) return wordlist[index];
        index = vowelless.get(dev(q));
        if (index !== undefined) return wordlist[index];
        return '';
    });
}
