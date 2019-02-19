const test = require("tape")
const balancedBrackets = require("./balancedBrackets")

test("Works for parentheses", t => {
  t.plan(4)
  t.equal(balancedBrackets("("), false)
  t.equal(balancedBrackets("()"), true)
  t.equal(balancedBrackets(")("), false)
  t.equal(balancedBrackets("(())"), true)
})

test("Works for all types of brackets", t => {
  t.plan(3)
  t.equal(balancedBrackets("[](){}"), true)
  t.equal(balancedBrackets("[({})]"), true)
  t.equal(balancedBrackets("[(]{)}"), false)
})

test("Ignore other characters", t => {
  t.plan(1)
  t.equal(balancedBrackets(" const obj  = { x: someFunction() }"), true)
})
