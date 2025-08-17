// https://leetcode.com/problems/rearrange-spaces-between-words/solutions/7093406/clean-solution/

// deno-fmt-ignore
function reorderSpaces(text: string) {
    const splitted = text.split(' ');                              // Could have empty strings
    const words = splitted.filter((w) => w.length);                // Only non-empty strings
    const spacesTotal = splitted.length - 1;                       // Total number of spaces
    const join = Math.floor(spacesTotal / (words.length - 1));     // Spaces between words, could be Infinity!
    const res = words.join(' '.repeat(isFinite(join) ? join : 0)); // Join words, repeat 0 if Infinity
    return res + ' '.repeat(text.length - res.length);             // Add remaining spaces to the end
}
