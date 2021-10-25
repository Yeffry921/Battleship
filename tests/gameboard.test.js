const Gameboard = require('../Gameboard')

describe('test for ship fleet', () => {
  const board = Gameboard()
  test('all ships are accounted for', () => {
    expect(board.shipFleet.length).toBe(5)
  })
})

describe('Board matrix are rendered correctly', () => {
  const board = Gameboard();
  const matrix = board.matrix;

  test('matrix outer size', () => {
    expect(matrix.length).toBe(10)
  })

  test('matrix rows inner sizes', () => {
    expect(matrix[0].length).toBe(10)
    expect(matrix[3].length).toBe(10)
    expect(matrix[5].length).toBe(10)
    expect(matrix[7].length).toBe(10)
  })
})

describe('placing ships on matrix', () => {
  const board = Gameboard();
  const ships = board.shipFleet;
  const matrix = board.matrix;

  test('placing ship with type of 5', () => {
    // Place ship on first row of the matrix, starting at 3rd position
    board.placeShips(0,3, ships[0]) 

    expect(matrix[0][2]).toBe(0)
    expect(matrix[0][3]).toBe('5')
    expect(matrix[0][4]).toBe('5')
    expect(matrix[0][5]).toBe('5')
    expect(matrix[0][6]).toBe('5')
    expect(matrix[0][7]).toBe('5')
    expect(matrix[0][8]).toBe(0)

  })

  test('placing ship with type of 4', () => {
    // Place ship on first row of the matrix, starting at 3rd position
    board.placeShips(1,2, ships[1]) 

    expect(matrix[1][0]).toBe(0)
    expect(matrix[1][1]).toBe(0)
    expect(matrix[1][2]).toBe('4')
    expect(matrix[1][3]).toBe('4')
    expect(matrix[1][4]).toBe('4')
    expect(matrix[1][5]).toBe('4')
    expect(matrix[1][6]).toBe(0)

  })

})

describe('test receive attacks', () => {
  const board = Gameboard()
  const matrix = board.matrix;
  const ships = board.shipFleet;

  test('test receive hit attacks', () => {
    board.placeShips(1,2, ships[0]) 

    board.receiveAttack(1, 2)
    expect(matrix[1][2]).toBe('hit')
  })
  test('test receive hit attacks', () => {
    board.placeShips(2,2, ships[2]) 

    board.receiveAttack(2, 2)
    expect(matrix[2][2]).toBe('hit')
  })
  test('test receive miss attacks', () => {
    board.placeShips(4,2, ships[0]) 

    board.receiveAttack(4, 1)
    expect(matrix[4][1]).toBe('miss')
    console.log(matrix)
  })

})