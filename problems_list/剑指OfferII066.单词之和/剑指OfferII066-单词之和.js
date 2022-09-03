class TrieNode {
    constructor() {
        this.val = 0;
        this.next = new Array(26).fill(0);
    }
}

var MapSum = function() {
    this.root = new TrieNode();
    this.map = new Map();

};

MapSum.prototype.insert = function(key, val) {
    const delta = val - (this.map.get(key) || 0);
    this.map.set(key, val);
    let node = this.root;
    for (const c of key) {
        if (node.next[c.charCodeAt() - 'a'.charCodeAt()] === 0) {
            node.next[c.charCodeAt() - 'a'.charCodeAt()] = new TrieNode();
        }
        node = node.next[c.charCodeAt() - 'a'.charCodeAt()];
        node.val += delta;
    }
};

MapSum.prototype.sum = function(prefix) {
    let node = this.root;
    for (const c of prefix) {
        if (node.next[c.charCodeAt() - 'a'.charCodeAt()] === 0) {
            return 0;
        }
        node = node.next[c.charCodeAt() - 'a'.charCodeAt()];
    }
    return node.val;
};