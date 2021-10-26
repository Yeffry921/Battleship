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
    return shipHits.length === length && shipHits.every((hit) => hit === 'hit')
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