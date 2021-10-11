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


  const hit = (num) => {
    shipHits[num] = 'hit'
  }

  const isSunk = () => {
   
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