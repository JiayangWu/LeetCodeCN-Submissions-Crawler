class MyCalendarTwo {
public:
    MyCalendarTwo() {

    }

    bool book(int start, int end) {
        int ans = 0;
        int maxBook = 0;
        cnt[start]++;
        cnt[end]--;
        for (auto &[_, freq] : cnt) {
            maxBook += freq;
            ans = max(maxBook, ans);
            if (maxBook > 2) {
                cnt[start]--;
                cnt[end]++;
                return false;
            }
        }
        return true;
    }
private:
    map<int, int> cnt;
};
