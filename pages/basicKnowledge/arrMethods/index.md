# Array Methods

## 数组的基础方法

- push: 向数组末尾添加一个或多个元素，并返回新数组的长度

- pop: 删除数组的最后一个元素，并返回该元素

- unshift: 向数组开头添加一个或多个元素，并返回新数组的长度

- shift: 删除数组的第一个元素，并返回该元素

- slice: 返回一个数组的切片副本，不改变原数组

- splice: 删除数组中的一段，并用一个或多个值替换它们

## 数组方法的时间复杂度

数组方法     |  时间复杂度
--------    | ---------
pop         |  O(1)
push        |  O(1)
slice       |  O(1)
shift       |  O(n)
unshift     |  O(n)
map         |  O(n)
splice      |  O(n)
find        |  O(n)
concat      |  O(n)
sort        |  O(nlogn)

## splice && slice

- splice 直接操作原数组, 返回切掉的数组，时间复杂度：O(n)

- slice 不改变原数组，返回切片新数组，时间复杂度：O(1)

## sort 原理

> 十大经典排序算法(动图演示) :https://www.cnblogs.com/onepixel/p/7674659.html

### 初级排序（O(n2)）

> 选择排序：每次找最小值，然后放到待排序数组的起始位置。

```js
const selectSort = arr => {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}
```

> 插入排序：从前往后逐步构建有序序列。对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

> 冒泡排序：嵌套循环，每次查看相连元素如果逆序，则交换位置。

### 高级排序（O(nlogn)）

> 快速排序：。

> 归并排序：。

> 堆排序：数组元素依次建立小顶堆，然后依次取堆顶元素并删除。

### 特殊排序（O(n+K)）

> 计数排序：。

> 桶排序：。

> 基数排序：。

