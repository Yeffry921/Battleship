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

describe('Board matrix are rendered correctly', () => {
  const board = Gameboard();

  test('matrix outer size', () => {
    expect(matrix.length).toBe(10)
  })

})

