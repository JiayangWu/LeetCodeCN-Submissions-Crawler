var largestComponentSize = function(nums) {
    const m = _.max(nums);;
    const uf = new UnionFind(m + 1);
    for (const num of nums) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                uf.union(num, i);
                uf.union(num, Math.floor(num / i));
            }
        }
    }
    const counts = new Array(m + 1).fill(0);
    let ans = 0;
    for (let num of nums) {
        const root = uf.find(num);
        counts[root]++;
        ans = Math.max(ans, counts[root]);
    }
    return ans;
};

class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    union(x, y) {
        let rootx = this.find(x);
        let rooty = this.find(y);
        if (rootx !== rooty) {
            if (this.rank[rootx] > this.rank[rooty]) {
                this.parent[rooty] = rootx;
            } else if (this.rank[rootx] < this.rank[rooty]) {
                this.parent[rootx] = rooty;
            } else {
                this.parent[rooty] = rootx;
                this.rank[rootx]++;
            }
        }
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
}