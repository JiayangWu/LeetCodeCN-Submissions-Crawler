class FoodRatings {
public:
    map<string, set<pair<int, string> > > g;
    map<string, int> h;
    vector<string> a;
    vector<string> b;
    vector<int> c;
    
    FoodRatings(vector<string>& _a, vector<string>& _b, vector<int>& _c) {
        a = _a;
        b = _b;
        c = _c;
        int n = a.size();
        for (int i = 0; i < n; i++)
        {
            g[b[i]].insert(make_pair(-c[i], a[i]));
            h[a[i]] = i;
        }
    }
    
    void changeRating(string f, int r) {
        int i = h[f];
        g[b[i]].erase(make_pair(-c[i], a[i]));
        c[i] = r;
        g[b[i]].insert(make_pair(-c[i], a[i]));
    }
    
    string highestRated(string x) {
        return g[x].begin()->second;
    }
};