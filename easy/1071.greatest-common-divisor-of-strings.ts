// https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/6799271/greatest-common-divisor/

function gcdOfStrings(str1: string, str2: string) {
    if (str1 + str2 != str2 + str1) return '';

    let len1 = str1.length, len2 = str2.length;
    while (len2) [len1, len2] = [len2, len1 % len2];

    return str1.substring(0, Math.abs(len1));
}
