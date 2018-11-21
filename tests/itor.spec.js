const itor = require('../services/itor')

describe('itor', () => {
  test('It throws on non integer', () => {
    expect(() => itor(10.5)).toThrowError('Number is not an integer')
  })

  test('It throws on integer inferior to 1', () => {
    expect(() => itor(0)).toThrowError('Number is inferior to 1')
  })

  test('It throws on integer superior to 100', () => {
    expect( () => itor(101)).toThrowError('Number is superior to 100')
  })

  test('It converts 100', () => {
    expect(itor(100)).toEqual('C')
  })

  test('It converts 50', () => {
    expect(itor(50)).toEqual('L')
  })

  test('It converts 1', () => {
    expect(itor(1)).toEqual('I')
  })

  test('It converts 3', () => {
    expect(itor(3)).toEqual('III')
  })

  test('It converts 4', () => {
    expect(itor(4)).toEqual('IV')
  })

  test('It converts 5', () => {
    expect(itor(5)).toEqual('V')
  })
  test('It converts 9', () => {
    expect(itor(9)).toEqual('IX')
  })
  test('It converts 10', () => {
    expect(itor(10)).toEqual('X')
  })

  test('It converts 13', () => {
    expect(itor(13)).toEqual('XIII')
  })

  test('It converts 14', () => {
    expect(itor(14)).toEqual('XIV')
  })

  test('It converts 15', () => {
    expect(itor(15)).toEqual('XV')
  })

  test('It converts 95', () => {
    expect(itor(95)).toEqual('XCV')
  })

  test('It converts 90', () => {
    expect(itor(90)).toEqual('XC')
  })

  test('It converts 99', () => {
    expect(itor(99)).toEqual('XCIX')
  })

  test('It converts 88', () => {
    expect(itor(88)).toEqual('LXXXVIII')
  })

  test('It converts 89', () => {
    expect(itor(89)).toEqual('LXXXIX')
  })

  test('It converts 49', () => {
    expect(itor(49)).toEqual('XLIX')
  })

  test('It converts 51', () => {
    expect(itor(51)).toEqual('LI')
  })
})