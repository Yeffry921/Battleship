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
// determine if you hit a ship or not 
    // If its anything other than 0 its a ship
    const shipLocator = board[x][y] //this gives me the ship tag from 2 to 5 

    // Find out which ship you have hit depending on its tag
    shipFleet.forEach((ship) => {
      // check if the ships tag that was clicked matches the tag we used to represent it
      if(ship.length == shipLocator) {
        ship.hit()
      } else {
        missedAttacks(x,y);
      }
    })

    // Make sure that location is inaccesible to be hit again ***
    // We could save the index of the value and work from there
    // simply disable things from the UI
    
  }

  // Keep track of missed attacks with colors on board I assume?
  const missedAttacks = (x,y) => {
    board[x][y] = 'missed'
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
