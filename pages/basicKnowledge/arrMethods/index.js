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
  console.log({ arr })
}

selectSort([4, 6, 1, 5, 2, 9, 3])