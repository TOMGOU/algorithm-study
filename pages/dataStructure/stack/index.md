# Stack

## 栈的特点：后入先出（LIFO）

## 单调栈：单调递增栈和单调递减栈

- 单调栈在解决前后对应的问题时，有奇效。

## 栈的应用场景

- 前后对应的问题，比如：

  * 有效括号：碰到左括号将其入栈，碰到右括号将栈顶对应的左括号出战，如果最后栈里没有元素说明括号有效。

## 单调栈的应用场景

- 单调栈可以降低双指针问题的时间复杂度。

- 前后对应的比较隐晦，场景比普通栈问题复杂，一般难度都为：困难，需要重点关注开始状态，比如：

  * 最大矩形面积：转化为单调递增栈问题，这是求单个柱子的最大面积的左边界就永远都是前一个柱子，当发现新的柱子高度比栈顶元素小的时候，就找到了右边界，从而计算出该柱子的最大面积。

    - `精髓：[0, ...heights, 0], 第一个0解决第一个元素问题，最后一个0解决栈的清空问题。`

  * 接雨水：同样转化为单调递减栈问题，当新元素入栈之前，比较新元素与栈顶元素的大小关系，如果新元素比栈顶元素大，说明找到了可以装雨水的凹地，凹地元素为栈顶元素对应的柱子。雨水量的计算：width * height。width 为 (当前索引 i - 栈中栈顶元素下面的那个元素值 - 1)，height 为 Math.min【（当前高度 - 栈顶元素对应高度）,（栈中栈顶元素下面的那个元素对应的高度 - 栈顶元素对应高度）】。如果新元素小于等于栈顶元素，说明没有还没找到可以装雨水的凹地，直接入栈即可。

    - `特别注意 width 的计算，一定要用栈顶元素前面的那个元素。`

    - `特别注意第一个元素，要直接入栈，因为没有栈顶元素用于比较。`

    - `特别注意找到凹地的目标元素，栈内至少有两个元素，即弹出栈顶元素后栈的长度不能为0，否者无法计算宽度。`

    - `栈里面存的是下标不是元素本身。`

    - `只要想获取栈顶元素，一定要先判空`

### LeeCode 题目：20、84、42


## 栈的 js 实现（没卵用）

```js
class Stack {
  constructor () {
    this.items = []
  }

  push (item) {
    this.items.push(item)
  }

  pop () {
    return this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  toString() {
    return this.items.reverse().join('')
  }
}

const decToBin = num => {
  const stack = new Stack()

  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }

  return stack.toString()
}

console.log(decToBin(10))
```
