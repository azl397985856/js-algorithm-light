/**
If u'r not familar with heap, read https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fheap.md&type=1 first

This picture shows exactly how it works https://tva1.sinaimg.cn/large/0081Kckwly1gm185zwz93j30fu0nj0ud.jpg
**/

function minHeap(A = []) {
  this.heapify(A);
}

minHeap.prototype._shiftUp = function(i) {
  let parent_i = (i / 2) >>> 0;
  while (parent_i > 0) {
    if (this.h[i] < this.h[parent_i]) {
      [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
    }
    parent_i = (parent_i / 2) >>> 0;
  }
};

minHeap.prototype._shiftDown = function(i) {
  while (i * 2 <= this.h.length - 1) {
    const mc = this._minChild(i);
    if (this.h[i] > this.h[mc]) {
      [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
    }
    i = mc;
  }
};

minHeap.prototype._minChild = function(i) {
  if (i * 2 + 1 > this.h.length - 1) return i * 2;
  if (this.h[i * 2] < this.h[i * 2 + 1]) return i * 2;
  return i * 2 + 1;
};

minHeap.prototype.pop = function() {
  if (this.h.length === 1) throw new Error('空了就别弹了吧？');
  const ans = this.h[1];
  this.h[1] = this.h[this.h.length - 1];
  this.h.pop();
  this._shiftDown(1);
  return ans;
};

minHeap.prototype.push = function(a) {
  this.h.push(a);
  this._shiftUp(this.h.length - 1);
};

minHeap.prototype.heapify = function(A) {
  this.h = [0].concat(A);
  i = 1;
  while (i < this.h.length) {
    this._shiftDown(i);
    i++;
  }
};

// test:
h = new minHeap([1, 2, 3]);
h.push(4);
h.push(5);
h.pop();
h.pop();
console.log(h.h); // inspect internal value
