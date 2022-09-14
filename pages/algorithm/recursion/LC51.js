var solveNQueens = function(n) {
  const res = [], X = [], P = [], N = []
  const board = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  const recur = (y) => {
    if (y === n) {
      console.log({ board })
      res.push(board.map(item => item.join('')))
      return
    }
    for (let i = 0; i < n; i++) {
      if (!X.includes(i) && !P.includes(y + i) && !N.includes(y - i)) {
        X.push(i)
        P.push(y + i)
        N.push(y - i)
        board[i][y] = 'Q'
        recur(y + 1)
        X.pop()
        P.pop()
        N.pop()
        board[i][y] = '.'
      }
    }
  }
  recur(0)
  console.log({ res })
  return res
};

var solveNQueens1 = function(n) {
  const res = []
  const board = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  const recur = (y, X, P, N, board) => {
    if (y === n) {
      console.log({ board })
      res.push(board.map(item => item.join('')))
      return
    }
    for (let i = 0; i < n; i++) {
      if (!X.includes(i) && !P.includes(y + i) && !N.includes(y - i)) {
        recur(y + 1, [...X, i], [...P, y + i], [...N, y - i], board.map((item, ay) => item.map((value, ax) => ax === i && ay === y ? 'Q' : value)))
      }
    }
  }
  recur(0, [], [], [], board)
  console.log({ res })
  return res
};

var solveNQueens2 = function(n) {
  const res = []
  const board = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  const recur = (y, X, P, N) => {
    console.log({ y, X, P, N })
    if (y === n) {
      res.push(board.map(item => item.join('')))
      return
    }
    for (let i = 0; i < n; i++) {
      if (!X.includes(i) && !P.includes(y + i) && !N.includes(y - i)) {
        board[i][y] = 'Q'
        recur(y + 1, [...X, i], [...P, y + i], [...N, y - i])
        board[i][y] = '.'
      }
    }
  }
  recur(0, [], [], [])
  console.log({ res })
  return res
};

solveNQueens2(4)
