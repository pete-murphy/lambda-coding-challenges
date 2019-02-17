const suits = ["Hearts", "Spades", "Diamonds", "Clubs"]
const values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
]

const createDeck_ = (suits, values) =>
  suits.flatMap(suit => values.map(value => ({ suit, value }))) //?

function createDeck(suits, values) {
  let deck = []
  for (let suitId = 0; suitId < suits.length; suitId++) {
    for (let valueId = 0; valueId < values.length; valueId++) {
      let card = {
        suit: suits[suitId],
        value: values[valueId]
      }
      deck.push(card)
    }
  }
  return deck
}

createDeck(suits, values) //?
createDeck_(suits, values) //?
