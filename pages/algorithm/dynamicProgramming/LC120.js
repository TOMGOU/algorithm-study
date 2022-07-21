var minimumTotal = function(triangle) {
  const res = triangle.map(item => item)
  const m = triangle.length
  for (let i = m - 2; i >= 0; i-- ) {
      const n = triangle[i].length
      console.log({ n })
      for (let j = 0; j < n; j++) {
          // console.log(res[i + 1][j + 1])
          res[i][j] = Math.min(res[i + 1][j], res[i + 1][j + 1]) + triangle[i][j]
      }
  }
  console.log(res)
  return res[0][0]
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])
