// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/7602108/simple-hash-set/

function hasAllCodes(s: string, k: number) {
    const st = new Set<string>();
    for (let i = k; i <= s.length; i++) {
        st.add(s.slice(i - k, i));
    }
    return st.size === 2 ** k;
}
