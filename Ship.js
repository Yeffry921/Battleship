const { shipLengths } = require('./shipData')

const Ship = (shipType) => {

  const type = shipType
  const length = shipLengths[shipType]

  const shipHits = []

  const hit = () => {
    shipHits.push('hit');
    return shipHits;
  }

  const isSunk = () => {
    return shipHits.every((hit) => {
      return hit === 'hit' && shipHits.length === length
    })
  }

  return {
    type,
    length,
    hit,
    isSunk,
    shipHits,
  }
}

module.exports = Ship