var relativeSortArray = function(arr1, arr2) {
  const hashMap = new Map()
  for (let i= 0;i < arr2.length;i++) {
    hashMap.set(arr2[i], i)
  }
  return arr1.sort((a, b) => {
    if (hashMap.get(a) === undefined && hashMap.get(b) === undefined) {
      return a - b
    } else if (hashMap.get(a) === undefined && hashMap.get(b) !== undefined) {
        return 1
    } else if (hashMap.get(b) === undefined && hashMap.get(a) !== undefined) {
      return -1
    } else if (hashMap.get(a) !== undefined && hashMap.get(b) !== undefined) {
      return hashMap.get(a) - hashMap.get(b)
    }
  })
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
