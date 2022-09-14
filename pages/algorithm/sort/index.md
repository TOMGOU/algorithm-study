# Sort

## 归并排序

```js
const merge = (left, right) => {
  const res = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  while (left.length) {
    res.push(left.shift())
  }

  while (right.length) {
    res.push(right.shift())
  }

  return res
}

const mergeSort = arr => {
  const len = arr.length
  if (len < 2) return arr
  const mid = Math.floor(len / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}
```
