const calculator = require('./calculator')

test('It should exist', () => {
    expect(calculator).toBeDefined()
})

test('1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('1 - 2 = -1', () => {
    expect(calculator.substract(1, 2)).toBe(-1)
})

test('1 * 2 = 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2)
})

test('8 / 2 = 4', () => {
    expect(calculator.divide(8, 2)).toBe(4)
})

test('8 / 0 = A division by 0 cannot be solved', () => {
    expect(calculator.divide(8, 0)).toBe('A division by 0 cannot be solved')
})

test('1 + "2" = You have not entered a number', () => {
    expect(calculator.add(1, '2')).toBe('You have not entered a number')
})

test('120 + 2.3 = 122.3', () => {
    expect(calculator.add(120, 2.3)).toBe(122.3)
})

test('@ / 1 = You have not entered a number', () => {
    expect(calculator.divide("@", 1)).toBe('You have not entered a number')
})