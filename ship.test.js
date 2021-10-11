const Ship = require('./index')

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
    expect(ship.shipHits).toEqual([null, null, null, null, null])
  })

  test('1 hit', () => {
    ship.hit(1)
    expect(ship.shipHits).toEqual([null, 'hit', null, null, null])
  })
})

describe('isSunk test function', () => {
  const ship = Ship('battleship')

  test('hit but not sunk', () => {
    ship.hit(0)
    ship.hit(2)
    expect(ship.isSunk()).toBe(false)
  })

  test('sunken ship', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    ship.hit(3)
    expect(ship.isSunk()).toBe(true)
  })
})