/**
If u'r not familiar with `indexed_priority_queue`. u may need learn priority_queue fisrt, and then read  https://mkhoshpa.github.io/IndexedPQ/ first.

This picture show exactly how it works. https://raw.githubusercontent.com/mkhoshpa/mkhoshpa.github.io/master/images/indexedminpq.png?style=centerme
**/

function index_minPQ() {
  this.pq = [];
  this.keys = [];
  this.n = 0;
  this.qp = [-1];
}

index_minPQ.prototype._swim = function(k) {
  while (k > 1 && this._greater(Math.floor(k / 2), k)) {
    this._swap(k, Math.floor(k / 2));
    k = Math.floor(k / 2);
  }
}

  
index_minPQ.prototype._sink = function(k) {
  while (2*k <= this.n) {
    let j = 2 * k;
    if (j < this.n && this._greater(j, j + 1)) j++;
    if (!this._greater(k, j)) break;
    this._swap(k, j);
    k = j;
  }
}

index_minPQ.prototype._swap = function(i, j) {
  let temp = this.pq[i];
  this.pq[i] = this.pq[j];
  this.pq[j] = temp;
  this.qp[this.pq[i]] = i;
  this.qp[this.pq[j]] = j;
}

index_minPQ.prototype._greater = function(i, j) {
  return this.keys[this.pq[i]] - this.keys[this.pq[j]] > 0;
}

index_minPQ.prototype.push = function(i, key) {
      this.n++;
      this.keys[i] = key;
      this.qp[i] = this.n;
      this.pq[this.n] = i;
      this._swim(this.n);
    }

  
index_minPQ.prototype.size = function() {
      return this.n;
    }

  
index_minPQ.prototype.pop = function() {
      let min = this.pq[1];
      this._swap(1, this.n--);
      this._sink(1);
      this.qp[min] = -1;
      this.keys[min] = null;
      return min;
    }
  
index_minPQ.prototype.isEmpty = function() {
      return this.n == 0;
    }
  
index_minPQ.prototype.contains = function(i) {
      return this.qp[i] != -1;
    }
  
index_minPQ.prototype.change = function(i, key) {
      if (!this.contains(i)) throw new Error("no such key");
      this.keys[i] = key;
      this._swim(this.qp[i]);
      this._sink(this.qp[i]);
    }
  
  
// test:
h = new index_minPQ();
h.push(0, 9.2);
h.push(1, 3.1);
h.push(2, 4.3);
h.push(3, 5.2);
h.push(4, 6.1);
console.log(h.pq); // the first element should be empty due to one-based indexing

// qp shows the index corresponding to keys
console.log(h.qp); 
console.log(h.keys); 

console.log("min index: " + h.pop());  // expect 1 because it's key is 3.1, the smallest

h.change(0, 1.1) // index 0 should be the smallest index now
console.log("min index: " + h.pop());
