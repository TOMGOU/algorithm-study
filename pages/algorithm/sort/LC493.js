let count = 0
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

// console.log(mergeSort([9, 5, 3, 1, 0, 6, 8, 7]))

var reversePairs = function(nums) {
  let count = 0
  const merge = (left, right) => {
      console.log({left, right})
      for (let i = 0;i < left.length;i++) {
          for (let j = right.length - 1;j >= 0;j--) {
              if (left[i] > 2 * right[j]) {
                  console.log(left[i], right[j])
                  count += 1 + j
                  console.log({count})
                  break
              }
          }
      }
      // return [...left, ...right].sort((a, b) => a - b)
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

  mergeSort(nums)
  console.log({count})

  return count
};

reversePairs([5,4,3,2,1])
