# Queue

## 栈的特点：先进先出（FIFO）

## 单调队列：单调递增队列和单调递减队列

> 解决滑动窗口的一把好手。

## 队列的应用场景

- 滑动窗口问题：窗口滑动的过程就是队列先进先出的现象。

- 如果只是求窗口内的元素的平均值或者总和，无需使用单调队列，正常的普通队列即可，但是如果要求队列内部元素的最值就需要单调队列出马了。

## 单调队列的应用场景

- 滑动窗口求最值，首先想到单调队列，有几个细节要注意：

  * 队里里面存的是下标，不是元素本身

  * 单调队列什么时候删除队头元素：index - queue[0] >= k

  * 单调队列什么时候删除队尾元素：违反了单调性

  * 只要想获取队头元素或者队尾，一定要先判空


### LeeCode 题目：41、239