
export default class TrieNode {
    private _isWord = false;
    private _characters: Map<string, TrieNode> = new Map<string, TrieNode>();

    set isWord(bool: boolean) {
        this._isWord = bool;
    }
    get isWord() {
        return this._isWord;
    }
    get characters() {
        return this._characters;
    }

    hasCharAt = (s: string) => this.characters.has(s);
    getCharAt = (s: string) => this._characters.get(s);
    setCharAt = (s: string) => this._characters.set(s, new TrieNode()).get(s)!;
}
