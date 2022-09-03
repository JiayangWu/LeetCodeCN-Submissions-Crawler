class Solution {
public:
    vector<int> busiestServers(int k, vector<int> &arrival, vector<int> &load) {
        set<int> available;
        for (int i = 0; i < k; i++) {
            available.insert(i);
        }
        // 第一个为结束时间，第二个服务器编号
        // 小根堆
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> busy;
        vector<int> requests(k);
        for (int i = 0; i < arrival.size(); i++) {
            while (!busy.empty() && busy.top().first <= arrival[i]) {
                available.insert(busy.top().second);
                busy.pop();
            }
            if (available.empty()) {
                continue;
            }
            auto p = available.lower_bound(i % k);
            if (p == available.end()) {
                p = available.begin();
            }
            requests[*p]++;
            busy.emplace(arrival[i] + load[i], *p);
            available.erase(p);
        }
        int maxRequest = *max_element(requests.begin(), requests.end());
        vector<int> ret;
        for (int i = 0; i < k; i++) {
            if (requests[i] == maxRequest) {
                ret.push_back(i);
            }
        }
        return ret;
    }
};