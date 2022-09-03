class MovingAverage {
public:
    /** Initialize your data structure here. */
    int sz, l=0, r=-1, sum=0;
    vector<int> rec;
    MovingAverage(int size) {
        sz=size;
    }
    
    double next(int val) {
        rec.emplace_back(val);
        if(r+1 -l +1<=sz){
            r++;
            sum+=rec[r];
        }else{
            sum-=rec[l];
            l++, r++;
            sum+=rec[r];
        }
        return 1.0*sum/(r-l+1);
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage* obj = new MovingAverage(size);
 * double param_1 = obj->next(val);
 */