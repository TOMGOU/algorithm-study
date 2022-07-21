# Search

## DFS(深度优先查找)

### 递归

```js
const visited = new Set()
const dfs = (node) => {
  if (visited.has(node)) return visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```

- 例子

  ```js
  const dfs = (root) => {
    let index = 0
    const res = []
    const recursion = (root, index) => {
      if (!root) return
      if (!res[index]) res[index] = []
      res[index].push(root.val)
      recursion(root.left, index + 1)
      recursion(root.right, index + 1)
    }
    recursion(root, index)
    return res
  };
  ```

### 非递归

```js

```

- 例子

  ```js
  const dfs = (root) => {
    
  };
  ```

## BFS(广度优先查找)

```js
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

- 例子

  ```js
  var bfs = (root) => {
    if (!root) return []
    const queue = [root], res = []
    while (queue.length) {
      const len = queue.length
      const tem = []
      for (let i = 0; i < len; i++) {
        const current = queue.shift()
        tem.push(current.val)
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
      }
      res.push(tem)
    }
    return res
  };
  ```
