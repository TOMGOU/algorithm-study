/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const len = grid.length
  const recursion = (m, n) => {
    grid[m][n] = '0'
    if (n + 1 < grid[m].length && grid[m][n + 1] === '1') {
      grid[m][n + 1] = '0'
      recursion(m, n + 1)
    }
    if (n - 1 > 0 && grid[m][n - 1] === '1') {
      grid[m][n - 1] = '0'
      recursion(m, n - 1)
    }
    if (m + 1 < len && grid[m + 1][n] === '1') {
      grid[m + 1][n] = '0'
      recursion(m + 1, n)
    }
    if (m - 1 > 0 && grid[m - 1][n] === '1') {
      grid[m - 1][n] = '0'
      recursion(m - 1, n)
    }
  }
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        console.log({ i, j })
        res++
        recursion(i, j)
      }
    }
  }
  // return res
  
  console.log({ grid, res })
};

numIslands([
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
])
