// https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/6275340/two-pointers/

function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const res = s.split('');
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (!vowels.has(res[left]) && left < right) left++;
        while (!vowels.has(res[right]) && right > left) right--;
        if (left < right) {
            [res[left++], res[right--]] = [res[right], res[left]];
        }
    }
    return res.join('');
}
