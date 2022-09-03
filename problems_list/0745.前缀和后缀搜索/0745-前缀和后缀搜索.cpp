struct Trie {
    unordered_map<string, Trie *> children;
    int weight;
};

class WordFilter {
private:
    Trie *trie;

public:
    WordFilter(vector<string>& words) {
        trie = new Trie();
        for (int i = 0; i < words.size(); i++) {
            string word = words[i];
            Trie *cur = trie;
            int m = word.size();
            for (int j = 0; j < m; j++) {
                Trie *tmp = cur;
                for (int k = j; k < m; k++) {
                    string key({word[k], '#'});
                    if (!tmp->children.count(key)) {
                        tmp->children[key] = new Trie();
                    }
                    tmp = tmp->children[key];
                    tmp->weight = i;
                }
                tmp = cur;
                for (int k = j; k < m; k++) {
                    string key({'#', word[m - k - 1]});
                    if (!tmp->children.count(key)) {
                        tmp->children[key] = new Trie();
                    }
                    tmp = tmp->children[key];
                    tmp->weight = i;
                }
                string key({word[j], word[m - j - 1]});
                if (!cur->children.count(key)) {
                    cur->children[key] = new Trie();
                }
                cur = cur->children[key];
                cur->weight = i;
            }
        }
    }
    
    int f(string pref, string suff) {
        Trie *cur = trie;
        int m = max(pref.size(), suff.size());
        for (int i = 0; i < m; i++) {
            char c1 = i < pref.size() ? pref[i] : '#';
            char c2 = i < suff.size() ? suff[suff.size() - 1 - i] : '#';
            string key({c1, c2});
            if (!cur->children.count(key)) {
                return -1;
            }
            cur = cur->children[key];
        }
        return cur->weight;
    }
};