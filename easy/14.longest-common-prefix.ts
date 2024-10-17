// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    const pop = strs.pop() || '';
    let index = 0;
    while (true) {
        if (
            index === pop.length ||
            !strs.every((value) => index < value.length && value[index] === pop[index])
        ) {
            break;
        }
        prefix += pop[index];
        index++;
    }
    return prefix;
}
