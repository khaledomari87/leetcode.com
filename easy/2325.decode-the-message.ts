// https://leetcode.com/problems/decode-the-message/solutions/7335214/hash-map/

function decodeMessage(key: string, message: string) {
    const map = new Map([[' ', ' ']]);
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0, j = 0; i < key.length; i++) {
        if (!map.has(key[i])) {
            map.set(key[i], letters[j++]);
        }
    }
    return message.split('').map((c) => map.get(c)).join('');
}
