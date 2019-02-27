const isBracket = c => "({[)}]".includes(c)
const isOpen = c => "({[".includes(c)
const closes = c => d => ["[]", "()", "{}"].some(pair => pair === c + d)
const splitAt = ix => str => [str.slice(0, ix), str.slice(ix)]

const balancedBrackets = str =>
  ![...str].reduce(
    (acc, c) =>
      (([h, t]) =>
        !isBracket(c)
          ? acc
          : isOpen(c)
            ? [c, ...acc]
            : closes(h)(c)
              ? [...t]
              : [c, ...acc])(splitAt(1)(acc)),
    []
  ).length

module.exports = balancedBrackets
