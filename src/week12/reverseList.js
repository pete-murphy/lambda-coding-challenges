function reverseList(node, prevNode = null) {
  let n = node.next
  node.next = prevNode
  n !== null && reverseList(n, node)
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const NodeA = new Node("A")
const NodeB = new Node("B")
const NodeC = new Node("C")
const NodeD = new Node("D")

NodeA.next = NodeB
NodeB.next = NodeC
NodeC.next = NodeD

reverseList(NodeA)
NodeC
NodeD
assert(NodeD.next == NodeC)
assert(NodeC.next == NodeB)
assert(NodeB.next == NodeA)
