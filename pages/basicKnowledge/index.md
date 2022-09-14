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

- arr.sort((a, b) => b - a) 降序

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

## 字符串的相关方法总结

- indexOf(): 返回字符串中指定文本首次出现的索引(位置)，未出现，返回-1,可接收两个参数，第一个参数是查找的内容，第二个参数，可传可不穿，从指定位置开始，eg：a.indexOf(‘name’, 5)

- lastIndexOf(): 返回字符串中指定文本最后一次出现的索引，未出现，返回-1,可接收两个参数，第一个参数是查找的内容，第二个参数，可传可不穿，从开头到指定位置，eg：a.indexOf(‘name’, 5)，从开始到索引值为5的

- slice(): 提取字符串的某个部分并在新字符串中返回被提取的部分，俩参数：起始索引，终止索引，不改变原来的字符串，参数可以是负数，负数从后面开始截取字符串，如果只传一个参数，就是从该参数的索引到最后的全部字符

- substring(): 与slice（）的方法一样，也不改变原数组，但是没有办法接受负数

- substr(): 两个参数：起始位置，切割长度，第二个参数代表的是长度，不能为负数

- toLowerCase(): 转小写

- toUpperCase(): 转大写

- trim(): 返回删除字符串两端的空白的结果，不改变原字符串

- concat(): 字符串拼接

- charAt(): 返回指定下标的字符

- split(): 将字符串分割成数组

- includes(): 判断是否包含某个子字符串，返回布尔值

- startsWith(): 判断是否以某个子字符串开头，返回布尔值

- endsWith(): 判断是否以某个子字符串结尾，返回布尔值

- search(reg): 正则匹配，总是返回第一个匹配项的下标，匹配不到返回 -1

- replace(reg, str): 正则替换，返回替换的结果，不改变原字符串

- match(reg): 比较复杂，分三种情况：('123hello1234world12'.match(/\d+/g))

  * 无全局表示符，无子集：匹配到，返回数组，匹配不到，返回 null

  `['1234', index: 8, input: '123hello1234world12', groups: undefined]`

  * 无全局表示符，有子集：匹配到，返回数组（第二项是子集），匹配不到，返回 null

  `['123', '1234', '12']`

  * 无全局表示符：匹配到，返回数组（全为匹配到的项），匹配不到，返回 null

  `['123', index: 0, input: '123hello1234world12', groups: undefined]`

- 正则基础知识：

  * `\d`: 数字
  * `\w`: 数字字母下划线
  * `\s`: 空格
  * `[a-zA-Z]`: 字母
  * `[-]`: 正则元素，例如：`/[0-9]/g`
  * `{,}`: 正则量词，例如：`/\d{0,3}/g`
  * `*`: 0个或者多个，`{0,}`
  * `+`: 1个或者多个，`{1,}`
  * `?`: 0个或者1个，`{0,1}`
  * `[^0]\d*[@]$`: `^` 表示以什么开头，`$` 表示以什么结尾
