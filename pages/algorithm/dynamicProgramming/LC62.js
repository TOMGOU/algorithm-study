var uniquePaths = function(m, n) {
  const board = new Array(m).fill([]).map(() => new Array(n).fill(0))
  for (let i = 0;i < m;i++) {
      for (let j = 0;j < n;j++) {
          if (i === 0 || j === 0) {
              board[i][j] = 1
          } else {
            board[i][j] = board[i-1][j] + board[i][j-1]
          }
      }
  }
  return board[m - 1][n - 1] 
};

const res = uniquePaths(3, 7)

console.log({res})
