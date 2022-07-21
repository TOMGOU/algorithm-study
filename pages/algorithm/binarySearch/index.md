# Binary Search

## 二分查找的前提条件

- 单调

- 有上下边界

## 模板代码

```js
findIndex = (nums, target) => {
  let L = 0, R = nums.length - 1
  while (L <= R) {
    let M = Math.floor((L + R) / 2)
    if (nums[M] === target) {
      return M
    } else if (nums[M] > target) {
      R = M - 1
    } else {
      L = M + 1
    }
  }
}

```