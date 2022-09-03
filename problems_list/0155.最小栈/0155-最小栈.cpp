class MinStack {
public:
    stack<int> mnStk, stk;
    MinStack() {
    }
    
    void push(int val) {
        stk.push(val);
        if(mnStk.empty() || mnStk.top()>=val) mnStk.push(val);
    }
    
    void pop() {
        int val=stk.top();
        stk.pop();
        if(mnStk.size() && val==mnStk.top()) mnStk.pop();
    }
    
    int top() {
        return stk.top();
    }
    
    int getMin() {
        return mnStk.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */