const Gameboard = require('../Gameboard')

describe('gameboard ship fleet', () => {
  const board = Gameboard()
  test('all ships are accounted for', () => {
    expect(board.shipFleet().length).toBe(5)
  })
})

describe('place ships function', () => {
  const board = Gameboard()
  const ships = board.shipFleet()
  const matrix = board.matrix

  test('place destroyer at X(1)Y(3)', () => {
    expect(board.placeShips(2, 3, ships[1])).toEqual()
  })
})

describe('properly tracks attack missed', () => {
  const board = Gameboard();
  const shipFleet = board.shipFleet()


  test('place destroyer at X(1)Y(3)', () => {
    expect(board.missedAttacks(1, 3)).toEqual()
  })
 
})