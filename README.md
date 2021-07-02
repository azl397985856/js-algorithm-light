# 💖 js-algorithm-light 💖

## 定位 💺

轻量级的 JavaScript 数据结构与算法库。

## 为什么？:raising_hand:

众所周知， JS 内置数据结构与算法的支持情况简直惨淡。大家如果真的要使用一些“高级”数据结构，要不自己实现，要么使用一些优秀的开源框架。这本身没有问题。但是：

- 如果面试用到了某一个数据结构，恰好 JS 不内置怎么办？
- 我想知道某一个数据结构（比如堆）的实现原理怎么办？

一般而言，我们有两种方法：

1. 看优秀 JS 数据结构框架的源码。
2. 看网上大家实现的代码。

先说第一种方式。框架源码为了兼容一些 edge case 或者提升压榨一点性能往往采取一些 hack，这些 hack 会极大阻碍你的阅读效率。因此这种方式我并不推荐。

再说下第二种方式。我在开辟仓库之前也搜索过一些数据结构的 JS 实现，给我的感觉就是 **不优雅，不简洁**。另外网上也不存在一个系统性的资料，大家的代码风格也各不相同，这对学习效率而言是不利的。


因此我开辟了这个仓库，暂定的目标是对标 **Python 所有的内置数据结构和算法**。


## RoadMap :blue_book:

目前实现了 heap, deque 和 binary_search 的主要 api。

| [heap](./heap.js)    | [deque](./deque.js)   | [binary_search](./binary_search.js) | sorted_list | [indexed_priority_queue.js](indexed_priority_queue.js) |
|---------|---------|---------------|-------------|-------------|
| [pop](https://github.com/azl397985856/js-algorithm-light/blob/master/heap.js#L31)     | [popleft](https://github.com/azl397985856/js-algorithm-light/blob/master/deque.js#L12) | [bisect_left](https://github.com/azl397985856/js-algorithm-light/blob/master/binary_search.js#L3)              |             |   [pop](https://github.com/azl397985856/js-algorithm-light/blob/master/indexed_priority_queue.js#L58) |
| [push](https://github.com/azl397985856/js-algorithm-light/blob/master/heap.js#L40)    | [append](https://github.com/azl397985856/js-algorithm-light/blob/master/deque.js#L6)  | [bisect_right](https://github.com/azl397985856/js-algorithm-light/blob/master/binary_search.js#L17)              |            |  [push](https://github.com/azl397985856/js-algorithm-light/blob/master/indexed_priority_queue.js#L44)  |
| [heapify](https://github.com/azl397985856/js-algorithm-light/blob/master/heap.js#L45) |         |               |             | [change](https://github.com/azl397985856/js-algorithm-light/blob/master/indexed_priority_queue.js#L75) |

> 点击表格中的链接可以直接定位到源码文件。

[Try it online](https://gitpod.io/#https://github.com/azl397985856/js-algorithm-light) 




