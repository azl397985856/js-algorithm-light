function LinkedList(val, next = null) {
  this.val = val;
  this.next = next;
}

deque.prototype.append = function(a) {
  const node = new LinkedList(a);
  this.tail.next = node;
  this.tail = node;
};

deque.prototype.popleft = function() {
  if (this.head.next) throw new Error('空了就别弹了吧？');
  const ans = this.head.next.val;
  this.head.next = this.head.next.next;
  return ans;
};

function deque(A) {
  this.tail = this.head = new LinkedList();
  for (a of A) {
    this.append(a);
  }
}
// test:
q = new deque([1, 2, 3]);
q.append(4);
q.append(5);
q.popleft();
q.popleft();
console.log(q);
