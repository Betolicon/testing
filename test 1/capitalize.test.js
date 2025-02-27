const capitalize = require('./capitalize')

test('It should exist', () => {
    expect(capitalize).toBeDefined()
})

test('alberto should be Alberto', () => {
    expect(capitalize('alberto')).toBe('Alberto')
})

test('"  ashley  " should be Ashley', () => {
    expect(capitalize('  ashley  ')).toBe('Ashley')
})

test('"  gustavo" should be Gustavo', () => {
    expect(capitalize('  gustavo')).toBe('Gustavo')
})

test('mOM should be Mom', () => {
    expect(capitalize('mOM')).toBe('Mom')
})

test('"  dAd " should be Mom', () => {
    expect(capitalize('  dAd ')).toBe('Dad')
})

test('If it is not a word, it must an error (12)', () => {
    expect(capitalize(12)).toBe("Not a word")
})

test('If it is not a word, it must an error (true)', () => {
    expect(capitalize(true)).toBe("Not a word")
})

test('"true" should be True', () => {
    expect(capitalize("true")).toBe("True")
})

test('"" should be ""', () => {
    expect(capitalize("")).toBe("")
})

test('"aT" should be "At"', () => {
    expect(capitalize("aT")).toBe("At")
})