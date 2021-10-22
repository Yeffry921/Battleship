const Ships = require('./Ship')

function matrix(m, n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push(new Array(m).fill(0))
  }
  return result
}


const Gameboard = () => {

  const shipFleet = () => {
    return shipNames.map((ship) => Ships(ship))
  }

  const board = matrix(10, 10)

  const test = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ]

  const placeShips = (x, y, ship) => {
    for (i = 0; i < ship.length; i++) {
      // y + i would work too?
      test[x][y++] = (ship.length).toString()
    }
  }

  const receiveAttack = () => {

  }

  // Keep track of missed attacks with colors on board I assume?
  const missedAttacks = () => {

  }

  // Could be something as simple as checking if 'Hit' amount = a certain number for each ship
  // Could also be keeping track of sunken ships, if sunken ships reaches the ship amount etc
  const allShipsSunk = () => {

  }


  return {
    shipFleet,
    placeShips,
  }


}



