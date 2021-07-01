# js-algorithm-light

## 定位

轻量级的 JavaScript 数据结构与算法库。

## 为什么？

众所周知， JS 内置数据结构与算法的支持情况简直惨淡。大家如果真的要使用一些“高级”数据结构，要不自己实现，要么使用一些优秀的开源框架。这本身没有问题。但是：

- 如果面试用到了某一个数据结构，恰好 JS 不内置怎么办？
- 我想知道某一个数据结构（比如堆）的实现原理怎么办？

一般而言，我们有两种方法：

1. 看优秀 JS 数据结构框架的源码。
2. 看网上大家实现的代码。

先说第一种方式。框架源码为了兼容一些 edge case 或者提升压榨一点性能往往采取一些 hack，这些 hack 会极大阻碍你的阅读效率。因此这种方式我并不推荐。

再说下第二种方式。我在开辟仓库之前也搜索过相信的数据结构的 JS 实现，给我的感觉就是 **不优雅，不简洁**。


因此我开辟了这个仓库，暂定的目标是对标 **Python 所有的内置数据结构和算法**。


## RoadMap

目前实现了 heap 和 deque 的主要 api。

|   | heap    | deque   | binary_search | sorted_list |
|---|---------|---------|---------------|-------------|
|   | pop     | popleft |               |             |
|   | push    | append  |               |             |
|   | heapify |         |               |             |


- [heap](./heap.js)
- [deque](./deque.js)

[Try it online](https://gitpod.io/#https://github.com/azl397985856/js-algorithm-light) 




