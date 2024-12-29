// https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6201061/very-simple-and-efficient/

function possibleStringCount(word: string) {
    let output = 1;
    for (let i = 1; i < word.length; i++) {
        output += +(word[i] === word[i - 1]);
    }
    return output;
}
