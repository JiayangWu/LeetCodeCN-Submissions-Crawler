class SmallestInfiniteSet {
public:
    set<int> st;
    priority_queue<int, vector<int>, greater<int>> pq;
    SmallestInfiniteSet() {
        for(int i=1; i<=1010; i++){
            st.insert(i);
            pq.push(i);
        }
    }
    
    int popSmallest() {
        int tp=pq.top();
        pq.pop();
        st.erase(tp);
        return tp;
    }
    
    void addBack(int num) {
        if(st.count(num)) return;
        
        st.insert(num);
        pq.push(num);
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */