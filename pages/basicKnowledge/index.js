const before = 'abcdefg'
const after = 'abcdef'
const beforeLen = before.length
const afterLen = after.length

const dp = new Array(beforeLen + 1).fill(0).map(() => new Array(afterLen + 1).fill(0))
for (let i = 0; i < beforeLen + 1; i++) {
    for (let j = 0; j < afterLen + 1; j++) {
        if (j === 0) dp[i][j] = i
        if (i === 0) dp[i][j] = j
        if (i > 0 && j > 0) {
          // console.log(i, j, before.charAt(i - 1), after.charAt(j - 1))
            if (before.charAt(i - 1) === after.charAt(j - 1)) {
              dp[i][j] = dp[i - 1][j - 1]
            } else {
              dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
            }
        }
    }
}
console.log(dp, dp[beforeLen][afterLen])


const arr = readline().split(' ')
const m = +arr[0], n = +arr[1]
const board = new Array(m).fill(0), res= [[0, 0]]
for (let i = 0; i < m; i++) {
    board[i] = readline().split(' ')
}
const recursion = (i, j, res) => {
    if (i === m - 1 && j === n - 1) {
        return res
    }
    if (j < n - 1 && board[i][j + 1] === '0' && i < m ) {
        return recursion(i, j + 1, [...res, [i, j + 1]])
    }
    if (i < m - 1 && board[i + 1][j] === '0' && j < n) {
        return recursion(i + 1, j, [...res, [i + 1, j]])
    }
}
const result = recursion(0, 0, [[0, 0]])
for (let i = 0; i < result.length; i++) {
    console.log(`(${result[i].join(',')})`)
}