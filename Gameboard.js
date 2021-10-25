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

    return x,y
  }


  const receiveAttack = (x, y) => {

    const shipId = matrix[x][y] 

    shipFleet.forEach((ship) => {
      if(ship.length == shipId) {
        ship.hit()
      } else {
        missedAttacks(x,y);
      }
    })

    return x,y
    // Make sure that location is inaccesible to be hit again ***
    // We could save the index of the value and work from there
    // simply disable things from the UI
  }

  const missedAttacks = (x,y) => {
    matrix[x][y] = 'missed';
  }

  const allShipsSunk = () => {
    shipFleet.every((ship) => {
      return ship.isSunk === true
    })
    
  }

  return {
    shipFleet,
    matrix,
    placeShips,
    receiveAttack,
    allShipsSunk,
    missedAttacks,
  }

}

module.exports = Gameboard
