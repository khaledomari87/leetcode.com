// https://leetcode.com/problems/strong-password-checker-ii/solutions/7579606/regular-expressions/

// deno-fmt-ignore
const strongPasswordCheckerII = (password: string) => [
    /.{8,}/,
    /[a-z]/,
    /[A-Z]/,
    /[0-9]/,
    /!|@|#|\$|%|\^|&|\*|\(|\)|\-|\+/,
    /^(?!.*(.)\1).+$/,
].every((r) => r.test(password));
