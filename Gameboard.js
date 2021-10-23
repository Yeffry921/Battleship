const Ships = require('./Ship')
const { shipNames } = require('./shipData')

function matrix(m, n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push(new Array(m).fill(0))
  }
  return result
}


const Gameboard = () => {

  const shipFleet = shipNames.map((ship) => Ships(ship))
  
  const board = matrix(10, 10)

  const placeShips = (x, y, ship) => {

    // Problems to solve //
    // **Make sure ships dont collide when placing them
    // **Related and prob the same as above prevent users from placing ship IF there is a ship in there already
    for (i = 0; i < ship.length; i++) {
      // y + i would work too?
      board[x][y++] = (ship.length).toString()
    }

    return board;
  }


  const receiveAttack = (x, y) => {

    
  }

  // Keep track of missed attacks with colors on board I assume?
  const missedAttacks = (x,y) => {
    
  }

  // Could be something as simple as checking if 'Hit' amount = a certain number for each ship
  // Could also be keeping track of sunken ships, if sunken ships reaches the ship amount etc
  const allShipsSunk = () => {
    
  }


  return {
    shipFleet,
    placeShips,
    receiveAttack,
    board,
  }


}



module.exports = Gameboard
