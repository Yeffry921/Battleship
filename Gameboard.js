const Ships = require('./Ship')
const { shipNames } = require('./shipData')

function makeMatrix(m, n) {
  var result = []
  for (let i = 0; i < n; i++) {
    result.push(new Array(m).fill(0))
  }
  return result
}


const Gameboard = () => {

  const shipFleet = shipNames.map((ship) => Ships(ship))

  const matrix = makeMatrix(10, 10)

  const placeShips = (x, y, ship) => {

    // Problems to solve //
    // **Make sure ships dont collide when placing them
    // **Related and prob the same as above prevent users from placing ship IF there is a ship in there already
    for (i = 0; i < ship.length; i++) {
      // y + i would work too?
      matrix[x][y++] = (ship.length).toString()
    }

  }


  const receiveAttack = (x, y) => {

    const shipId = matrix[x][y]
    let result = null;

    if (matrix[x][y] === 'hit' || matrix[x][y] === 'miss') {
      return;
    }

    if (shipId === 0) {
      matrix[x][y] = 'miss'
      result = 'miss'
    }

    shipFleet.forEach((ship) => {
      if (ship.length == shipId) {
        matrix[x][y] = 'hit'
        ship.hit()
        result = 'hit';
      }
    })

    return result;

  }

  const allShipsSunk = () => {
    return shipFleet.every((ship) => ship.isSunk() === true)
  }

  return {
    shipFleet,
    matrix,
    placeShips,
    receiveAttack,
    allShipsSunk,
  }

}

module.exports = Gameboard

// By default all should have class name of some sort
// 

// 0 = white

// 1-5 = 

// miss = green

// hits = red