const shipLength = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
}

const shipName = [
  'carrier',
  'battleship',
  'cruiser',
  'submarine',
  'destroyer',
];

const Ship = (shipType) => {
  const type = shipType
  const length = shipLength[shipType]

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