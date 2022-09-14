/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.queue = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length === this.size ) {
        this.queue.shift()
    }
    this.queue.push(val)
    return this.queue.reduce((a, b) => a + b) / this.queue.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const obj = new MovingAverage(3)

console.log(obj.next(1))
console.log(obj.next(2))
console.log(obj.next(3))
console.log(obj.next(4))