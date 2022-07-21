# Hash

## hash 表的理解

- 哈希表是一种根据关键码去寻找值的数据映射结构，所以关键码要唯一，否则会出现 hash 碰撞。

- js 可以用来表示的 hash 表的数据结构：json、Set

## Set 方法

```js
const hashMap = new Map()
// 设置
hashMap.set(a, b)
// 查询
hashMap.get(a)
// 遍历：hashMap.keys()
for (let key of hashMap.keys()) {
  if (hashMap.get(key) !== 0) return false
}
```

## hash 表的应用场景

- 优势：hash 表的查询时间复杂度是 O(n)，可以用来优化两次 for 循环

- 应用场景：有映射关系，比如：

  * 两数之和为9：首先把所有值都存到 hash 表中，然后查询 hashMap.get(9 - a) 是否为 undefined
  
  * 字母异位词：字母相同，第一个单词用来设置 hash 表并且计数加一，第二个单词用来处理计数减一，最后验证 hash 表所有值都为 0。

### LeeCode 题目：1、242