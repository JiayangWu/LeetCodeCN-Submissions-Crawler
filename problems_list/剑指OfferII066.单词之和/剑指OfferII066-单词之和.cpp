struct TrieNode {
    int val;
    TrieNode * next[26];
    TrieNode() {
        this->val = 0;
        for (int i = 0; i < 26; ++i) {
            this->next[i] = nullptr;
        }
    }
};

class MapSum {
public:
    MapSum() {
        this->root = new TrieNode();
    }
    
    void insert(string key, int val) {
        int delta = val;
        if (cnt.count(key)) {
            delta -= cnt[key];
        }
        cnt[key] = val;
        TrieNode * node = root;
        for (auto c : key) {
            if (node->next[c - 'a'] == nullptr) {
                node->next[c - 'a'] = new TrieNode();
            }
            node = node->next[c - 'a'];
            node->val += delta;
        }
    }
    
    int sum(string prefix) {
        TrieNode * node = root;
        for (auto c : prefix) {
            if (node->next[c - 'a'] == nullptr) {
                return 0;
            } else {
                node = node->next[c - 'a'];
            }
        }
        return node->val;
    }
private:
    TrieNode * root;
    unordered_map<string, int> cnt;
};