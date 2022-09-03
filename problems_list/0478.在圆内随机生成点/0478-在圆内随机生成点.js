/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
// function getRandomInt(max){
//     return Math.random()*max;
// }

var Solution = function(radius, x_center, y_center) {
    this.rad=radius;
    this.xc=x_center;
    this.yc=y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    while(true){
        const x=Math.random()*(2*this.rad)-this.rad;
        const y=Math.random()*(2*this.rad)-this.rad;
        if(x*x+y*y<=this.rad*this.rad){
            return [this.xc+x, this.yc+y];
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */