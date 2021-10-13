const { shipLengths } = require('./shipData')

const Ship = (shipType) => {

  const type = shipType
  const length = shipLengths[shipType]

  const shipHits = Array(length).fill(null)

  const hit = (num) => {
    shipHits[num] = 'hit'
  }

  const isSunk = () => {
    return shipHits.every((hit) => {
      return hit === 'hit'
    })
  }

  return {
    type,
    length,
    shipHits,
    hit,
    isSunk,
  }
}

module.exports = Ship