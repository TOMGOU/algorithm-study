var merge = function(intervals) {
  const res = []
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals)
  res.push(intervals[0])
  for (let i = 1;i < intervals.length;i++) {
    console.log({res})
    if (res[res.length - 1][1] >= intervals[i][0]) {
      res[res.length - 1][1] = intervals[i][1] > res[res.length - 1][1] ? intervals[i][1] : res[res.length - 1][1]
      console.log(res[res.length - 1])
    } else {
      res.push(intervals[i])
      console.log(intervals[i])
    }
  }
  return res
};

console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))
