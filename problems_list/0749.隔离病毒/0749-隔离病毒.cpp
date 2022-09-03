class Solution {
private:
    static constexpr int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
public:
    int containVirus(vector<vector<int>>& isInfected) {
        auto pair_hash = [fn = hash<int>()](const pair<int, int>& o) {
            return (fn(o.first) << 16) ^ fn(o.second);
        };

        int m = isInfected.size(), n = isInfected[0].size();
        int ans = 0;
        while (true) {
            vector<unordered_set<pair<int, int>, decltype(pair_hash)>> neighbors;
            vector<int> firewalls;
            for (int i = 0; i < m; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (isInfected[i][j] == 1) {
                        queue<pair<int, int>> q;
                        unordered_set<pair<int, int>, decltype(pair_hash)> neighbor(0, pair_hash);
                        int firewall = 0, idx = neighbors.size() + 1;
                        q.emplace(i, j);
                        isInfected[i][j] = -idx;

                        while (!q.empty()) {
                            auto [x, y] = q.front();
                            q.pop();
                            for (int d = 0; d < 4; ++d) {
                                int nx = x + dirs[d][0];
                                int ny = y + dirs[d][1];
                                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                                    if (isInfected[nx][ny] == 1) {
                                        q.emplace(nx, ny);
                                        isInfected[nx][ny] = -idx;
                                    }
                                    else if (isInfected[nx][ny] == 0) {
                                        ++firewall;
                                        neighbor.emplace(nx, ny);
                                    }
                                }
                            }
                        }
                        neighbors.push_back(move(neighbor));
                        firewalls.push_back(firewall);
                    }
                }
            }
            
            if (neighbors.empty()) {
                break;
            }

            int idx = max_element(neighbors.begin(), neighbors.end(), [](const auto& v0, const auto& v1) { return v0.size() < v1.size(); }) - neighbors.begin();
            ans += firewalls[idx];
            for (int i = 0; i < m; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (isInfected[i][j] < 0) {
                        if (isInfected[i][j] != -idx - 1) {
                            isInfected[i][j] = 1;
                        }
                        else {
                            isInfected[i][j] = 2;
                        }
                    }
                }
            }
            for (int i = 0; i < neighbors.size(); ++i) {
                if (i != idx) {
                    for (const auto& [x, y]: neighbors[i]) {
                        isInfected[x][y] = 1;
                    }
                }
            }
            if (neighbors.size() == 1) {
                break;
            }
        }
        return ans;
    }
};