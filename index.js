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
    //  function that takes a number and then marks that position as ‘hit’.
  }

  const isSunk = () => {
    // should be a function that calculates it based on their length and whether all of their positions are ‘hit’.
  }

  return {
    type,
    length,
    hit,
    isSunk,
  }
}

const createShipFleet = () => {
  const shipFleet = {}

  shipName.forEach((shipType) => {
  shipFleet[shipType] = Ship(shipType)
  })

  return shipFleet

}




