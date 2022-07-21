class Stack {
  constructor () {
    this.items = []
  }

  push (item) {
    this.items.push(item)
  }

  pop () {
    this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  toString() {
    return this.items.reverse().join('')
  }
}

const decToBin = num => {
  const stack = new Stack()

  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }

  return stack.toString()
}

console.log(decToBin(10))