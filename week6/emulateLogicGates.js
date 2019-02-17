const NOT = x => (x ? false : true)

const AND = (x, y) => (x ? (y ? true : false) : false)

const NAND = (x, y) => (x ? (y ? false : true) : true)

const OR = (x, y) => (x ? true : y ? true : false)

const XOR = (x, y) => (x ? (y ? false : true) : y ? true : false)

module.exports = {
  NOT,
  AND,
  NAND,
  OR,
  XOR
}
