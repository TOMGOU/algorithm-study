# 细节知识点

## 数组的预设值

> 动态规划，一般会用一维数组或者二维数组储存所有的状态，初始化的时候要注意引用类型数据的问题。

- 一维数组

  * new Array(9).fill(new Set()) ❌

  * new Array(9).fill(0).map(() => new Set()) ✅

- 二维数组

  * new Array(9).fill(new Array(9).fill(false)) ❌

  * new Array(9).fill(0).map(() => new Array(9).fill(false)) ✅

## 数组简单排序

> 在很多情况下，我们需要对数组预先进行简单排序处理，比如三数之和需要先排序来避免重复的结果，而 arr.sort() 本身不会按数字大小排序，需要传入一个排序函数

- arr.sort((a, b) => a - b) 升序

- arr.sort((a, b) => a - b) 降序

## Map 和 Set 的 hash 映射

> 在大多数情况下，为了降低判重的复杂度，就会使用 Map 和 Set 的 has 方法快速判重。

- Map

```js
const map = new Map()
map.set(1, 2)

if (map.get(1) === 2) {
  console.log('existed')
}

if (map.has(1)) {
  console.log('existed')
}
```

- Set

```js
const set = new Set()
set.add(1)

if (set.has(1)) {
  console.log('existed')
}
```

## recursion 的子任务

- recursion(x, n / 2) * recursion(x, n / 2) ❌

- recursion(x * x, n / 2) ✅

## for in 和 for of 的区别

- for in 不仅会遍历当前对象，还包括原型链上的可枚举属性，for in 不适合遍历数组，主要应用为对象

- for of 仅遍历当前对象

```js
const hashMap = new Map()
hashMap.set('a', 1).set('b', 2)
for (let key of hashMap.keys()) {
  console.log(hashMap.get(key))
}
```
