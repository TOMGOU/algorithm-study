# Recursion

## 递归细节

- Pow(x, n): 通过二分来简化递归，核心思路：$$3^4$$ = $$(3 * 3)^2$$ => recursion(x * x, n / 2)，这是一种很特殊的带返回值的递归，不太符合一般的递归模板，逻辑的处理都在参数上面。

- N 皇后的回溯问题：不同层级的状态，能当做参数传递的就以参数的形式进行传递。

> arr 不通过参数传递，所以状态要还原：arr[x][y] = '.'

```js
var solveNQueens = function(n) {
    const res = []
    const arr = new Array(n).fill(0).map(() => new Array(n).fill('.'))
    const recursion = (y, X, P, N) => {
        if (y === n) {
            res.push(arr.map(item => item.join('')))
            return
        }
        for (let x = 0; x < n; x++) {
            if (!X.includes(x) && !P.includes(x + y) && !N.includes(x - y)) {
                arr[x][y] = 'Q'
                recursion(y + 1, [...X, x], [...P, x + y], [...N, x - y])
                arr[x][y] = '.'
            }
        }
    }
    recursion(0, [], [], [])
    return res
};

```

> 所有状态通过参数传递，走不通的时候会自动跳回上一层，状态也就自动还原了。

```js
var solveNQueens = function(n) {
    const res = []
    const arr = new Array(n).fill(0).map(() => new Array(n).fill('.'))
    const recursion = (y, X, P, N, arr) => {
        if (y === n) {
            res.push(arr.map(item => item.join('')))
            return
        }
        for (let x = 0; x < n; x++) {
            if (!X.includes(x) && !P.includes(x + y) && !N.includes(x - y)) {
                recursion(y + 1, [...X, x], [...P, x + y], [...N, x - y], arr.map((item, ax) => item.map((value, ay) => ax === x && ay === y ? 'Q' : value)))
            }
        }
    }
    recursion(0, [], [], [], arr)
    return res
};
```

## 递归模板

```js
const recursion = (level, param1, param2, ...) => {
  // recursion terminator 递归终结条件
  if (level > max_level) {
    process_result
    return
  }

  // process logic in current level 处理当前逻辑
  process(level, data, ...)

  // drill down 下探到下一层
  recursion(level + 1, p1, ...)

  // reverse current level status if needed 清理当前层状态
}
```

## 分治模板
```js
const divide_conquer = (problem, params) => {

  // recursion terminator 递归终结条件
  if (problem == null) {
    process_result
    return
  }

  // process current problem 处理当前子问题
  subproblems = split_problem(problem, data)

  subresult1 = divide_conquer(subproblem[0], p1)
  subresult2 = divide_conquer(subproblem[1], p1)
  subresult3 = divide_conquer(subproblem[2], p1)
  ...

  // merge 合并子问题
  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status 清理当前层状态

}
```

## 回溯模板
```js
const recursion = (level, param1, param2, ...) => {
  // recursion terminator 递归终结条件
  if (level > max_level) {
    process_result
    return
  }

  // process logic in current level 处理当前逻辑
  process(level, data, ...)

  // drill down 下探到下一层
  recursion(level + 1, p1, ...)

  // reverse current level status if needed 清理当前层状态: 【可以直接将变量改为参数传递自动清理状态】

}
```
