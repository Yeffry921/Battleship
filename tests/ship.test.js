const Ship = require('../Ship')

describe('ship properties', () => {
  const ship = Ship('destroyer')

  test('type of ship', () => {
    expect(ship.type).toBe('destroyer')
  })

  test('length of ship', () => {
    expect(ship.length).toBe(2)
  })
})

describe('hit test function', () =>  {

  const ship = Ship('carrier')

  test('no hits', () => {
    expect(ship.shipHits).toEqual([])
  })

  test('1 hit', () => {
    ship.hit()
    expect(ship.shipHits).toEqual(['hit'])
  })

  test('extra hit', () => {
    ship.hit()
    expect(ship.shipHits).toEqual(['hit', 'hit'])
  })
})

describe('isSunk test function', () => {

  test('hit a 4 piece ship 2 times', () => {
    const ship = Ship('battleship')

    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(false)
  })
})

describe('isSunk test function', () => {

  test('sunken ship', () => {
    const ship = Ship('cruiser')
  
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
  })
})
